---
title: "关于 OAuth 你又了解哪些？"
authors:
  - name: "罗锦华"
    title: "Author"
    url: "https://github.com/kingluo"
    image_url: "https://github.com/kingluo.png"
keywords: 
- 授权
- Apache APISIX
- OAuth
description: 本文将介绍 OAuth 和 OpenID Connect 的一些基础信息，并带来详细的使用说明；同时也介绍了由 API7.ai 捐赠的开源项目 Apache APISIX 是如何支持 OAuth 等功能。
tags: [Ecosystem]
---

> 本文将介绍 OAuth 和 OpenID Connect 的一些基础信息，并带来详细的使用说明；同时也介绍了由 API7.ai 捐赠的开源项目 Apache APISIX 是如何支持 OAuth 等功能。

<!--truncate-->

> 作者[罗锦华](https://github.com/kingluo)，API7.ai 技术专家/技术工程师，开源项目 pgcat，lua-resty-ffi，lua-resty-inspect 的作者。

## OAuth 的背景

OAuth，O 是 Open，Auth 是授权，也就是开放授权的意思。OAuth 始于 2006 年，其设计初衷正是委托授权，就是让最终用户也就是资源拥有者，将他们在受保护资源服务器上的部分权限（例如查询当天订单）委托给第三方应用，使得第三方应用能够代表最终用户执行操作（查询当天订单）。

OAuth 1.0 协议于 2010 年 4 月作为 RFC 5849 发布，这是一份信息性的评论请求。OAuth 2.0 框架的发布考虑了从更广泛的 IETF 社区收集的其他用例和可扩展性要求。尽管基于 OAuth 1.0 部署体验构建，OAuth 2.0 并不向后兼容 OAuth 1.0。OAuth 2.0 于 2012 年 10 月作为 RFC 6749 发布，承载令牌使用作为 RFC 6750 发布。

在 OAuth 协议中，通过为每个第三方软件和每个用户的组合分别生成对受保护资源具有受限的访问权限的凭据，也就是访问令牌，来代替之前的用户名和密码。而生成访问令牌之前的登录操作，又是在用户跟平台之间进行的，第三方软件根本无从得知用户的任何信息。

这样第三方软件的逻辑处理就大大简化了，它今后的动作就变成了请求访问令牌、使用访问令牌、访问受保护资源，同时在第三方软件调用大量 API 的时候，不再传输用户名和密码，从而减少了网络安全的攻击面。

说白了就是集中授权。

值得注意的是，OAuth 并非身份验证，这里的 Auth 是 Authorization，OAuth 是发生在用户做了身份验证后的事情，系统授权用户能做什么操作。互联网中所有的受保护资源，几乎都是以 Web API 的形式来提供访问的。不同的用户能做的事情不同，例如一个 GitHub 项目，有些用户只有读取和提交 PR（pull request）的权限，而管理员用户则能合并 PR。将用户权限在 API 层面细分，是 OAuth 要做的事情。

## OAuth的授权流程

### 角色

在 OAuth 2.0 的体系里面有四种角色：

* 第三方应用：一般分为前端浏览器、APP 和后端应用服务器。
* 资源拥有者：使用第三方应用的用户，并在授权服务器上有账号。
* 授权服务：提供授权的开发平台，例如微博、GitHub、微信。
* 受保护资源：用户的各类信息，例如用户名、头像、昵称、邮箱等信息。

### 流程

![图片](https://static.apiseven.com/2022/11/01/6360ee518d404.png)

步骤A：第三方应用向用户（其实是通过授权服务器）申请授权码

步骤B：授权服务器返回授权码给第三方应用

步骤C：第三方应用将授权码发给资源服务器，申请访问口令

步骤D：授权服务器返回访问口令给第三方应用

步骤E：第三方应用使用访问口令向资源服务器请求用户信息

步骤F：资源服务器返回用户信息，第三方应用提供业务逻辑给用户

#### 授权码和访问口令

获取访问口令的方式在标准里有四种，这里只谈论授权码方式，这也是最常见最安全的方式：

![图片](https://static.apiseven.com/2022/11/01/6360ee4fbbc3a.png)

步骤 A：第三方应用让用户选择授权方式，例如 GitHub，然后携带`client_id`和`redirect_uri`等参数将用户重定向到授权服务器

请求示例：

```plain
    GET /authorize?response_type=code&client_id=s6BhdRkqt3&state=xyz
        &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.13    Host: server.example.com
```

步骤 B：用户登录和授权
步骤 C：授权服务器根据`redirect_uri`将用户重定向回到第三方应用的后端，提供授权码

响应示例：

```plain
1     HTTP/1.1 302 Found
2     Location: https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA
3               &state=xyz
```

步骤 D：第三方应用的后端访问授权服务器，用授权码去换访问口令
请求示例：

```plain
1     POST /token HTTP/1.1
2     Host: server.example.com
3     Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
4     Content-Type: application/x-www-form-urlencoded
5
6     grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA
7     &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb
```

步骤 E：授权服务器返回访问口令，第三方应用的后端渲染功能页面（对应步骤C）给浏览器，为用户提供功能
授权服务器的响应示例：

```plain
     HTTP/1.1 200 OK
     Content-Type: application/json;charset=UTF-8
     Cache-Control: no-store
     Pragma: no-cache

     {
       "access_token":"2YotnFZFEjr1zCsicMWpAA",
       "token_type":"example",
       "expires_in":3600,
       "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",
       "example_parameter":"example_value"
     }
```

**实际场景示例**

小明想通过小兔软件打印他在京东上的订单。

资源拥有者 -> 小明

第三方软件 -> 小兔软件

授权服务 -> 京东商家开放平台的授权服务

受保护资源 -> 小明店铺在京东上面的订单

![图片](https://static.apiseven.com/2022/11/01/6360ee51138d8.png)

**为什么授权码和访问口令要分开获取呢？**

OAuth2 协议中，用户登录成功后，OAuth2 认证服务器会将用户的浏览器回调到一个回调地址，并携带一个授权码 `code`。这个授权码 `code` 一般有效期十分钟且一次有效，用后作废。这避免了在前端暴露 `access_token` 或者用户信息的风险，`access_token` 的有效期都比较长，一般为 1~2 个小时。如果泄露会对用户造成一定影响。后端收到这个 `code` 之后，需要使用 `Client Id + Client Secret + Code` 去授权服务器换取用户的 `access_token`。

在这一步，实际上授权服务器对第三方应用进行了认证，能够确保来授权服务器获取 `access_token` 的机器是可信任的，而不是任何一个人拿到 `code` 之后都能来授权服务器进行 `code` 换 `token`。如果 `code` 被黑客获取到，如果他没有 `Client Id + Client Secret` 也无法使用，就算有，也要和真正的应用服务器竞争，因为 `code` 一次有效，用后作废，加大了攻击难度。相反，如果不经过 `code` 直接返回 `access_token` 或用户信息，那么一旦泄露就会对用户造成影响。

简单说就是，client secret 不能暴露给前端（验证 client），用户授权（获取 code）又只能前端做，因此需要分两步。

## OIDC（OpenID Connect）

既然 OAuth 本身就隐含了身份验证，那么为什么不以标准化的形式将身份验证的结果导出，使得第三方应用可以使用呢？这就是 OIDC 要做的事情了。那身份验证的结果是什么？很简单，它就是用户的各种信息。

OIDC 怎么做？简单来说，就是在 OAuth 返回 `access token` 的时候顺带返回 `id token`，`id token` 的格式是 `JWT`，第三方应用可使用非对称公钥或者对称密码验证 `id token` 的合法性和有效性，而 `id token` 本身也包含了基本用户信息。另外，OIDC 提供了 UserInfo endpoint，第三方应用可携带 access token 访问该 endpoint 以获取额外的用户信息。

OIDC 还有一个好处，就是单点登录（SSO，Single Sign On）和单点注销（SLO，Single LogOut）。跟 OAuth 类似，OIDC 提供的集中化身份验证，它可以对应多个应用。只要用户成功登录了一个应用，那么当他登录其他应用的时候，就无需再进行一次身份验证了（例如输入用户名密码），那是因为授权服务器在用户的浏览器里面存下了 cookie。而单点注销则是用户注销了一个应用，其他应用也顺便注销了，注销既可以借由浏览器来做，也可以由第三方应用的后端与授权服务器之间来做。注销的时候指定的参数就是 `id token` 里面的 session 字段。

> 注意：OIDC 并没有指定身份验证的具体方式，例如传统的密码或者刷脸，而是指定了如何将身份验证委托给一个集中化的身份验证提供者，在身份验证通过后得到什么凭证（`id token`），这个凭证如何被校验（JWT 格式），这个凭证包含了哪些用户信息。这样第三方应用就无需重造轮子了。**OAuth 提供了集中化的授权，而 OIDC 则是在此基础上进一步提供了集中化的身份验证。**

## APISIX 对 OAuth/OIDC 的支持

Apache APISIX 是一个开源的云原生 API 网关，作为 API 网关，它兼具动态、实时、高性能等特点，提供了负载均衡、动态上游、灰度发布、服务熔断、身份认证、可观测性等丰富的流量管理功能。你可以使用 APISIX 来处理传统的南北向流量，以及服务间的东西向流量，也可以当做 K8s Ingress controller 来使用。

APISIX 既然是 API 网关，为多个上游应用服务器做代理，那么集中授权、集中身份认证，放在 API 网关是最自然不过的事情了。

APISIX 的 `openid-connect` 插件支持 OpenID Connect 协议，用户可以使用该插件让 APISIX 对接众多认证鉴权软件，如 Okta、Keycloak、Ory Hydra、Authing 等，作为集中式认证网关部署于企业中。OIDC是OAuth的超集，所以这个插件也隐含了对OAuth的支持。

部署图如下所示：

![图片](https://static.apiseven.com/2022/11/01/6360ee5f5d57a.png)

配置实例：使用 Keycloak 与 API 网关保护你的 API配置 Keycloak

|信息|取值|
|:----|:----|
|keycloak地址|[http://127.0.0.1:8080/](http://127.0.0.1:8080/)|
|Realm|myrealm|
|Client Type|OpenID Connect|
|Client ID|myclient|
|Client Secret|e91CKZQwhxyDqpkP0YFUJBxiXJ0ikJhq|
|Redirect URI|[http://127.0.0.1:9080/anything/callback](http://127.0.0.1:9080/anything/callback)|
|Discovery|[http://127.0.0.1:8080/realms/myrealm/.well-known/openid-configuration](http://127.0.0.1:8080/realms/myrealm/.well-known/openid-configuration)|
|Logout URI|/anything/logout|
|Username|myuser|
|Password|myrealm|
|Realm|mypassword|

**场景示例**

```shell
curl -XPUT 127.0.0.1:9080/apisix/admin/routes/1 -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -d '{
    "uri":"/anything/*",
    "plugins": {
        "openid-connect": {
            "client_id": "myclient",
            "client_secret": "e91CKZQwhxyDqpkP0YFUJBxiXJ0ikJhq",
            "discovery": "http://127.0.0.1:8080/realms/myrealm/.well-known/openid-configuration",
            "scope": "openid profile",
            "bearer_only": false,
            "realm": "myrealm",
            "redirect_uri": "http://127.0.0.1:9080/anything/callback",
            "logout_path": "/anything/logout"
        }
    },
    "upstream":{
        "type":"roundrobin",
        "nodes":{
            "httpbin.org:80":1
        }
    }
}'
```

创建 API 成功后访问 [http://127.0.0.1:9080/anything/test](http://127.0.0.1:9080/anything/test) 时，由于未进行登录，因此将被引导到 Keycloak 的登录页面：

![图片](https://static.apiseven.com/2022/11/01/6360ee5e3f870.png)

输入账号（myuser）、密码（mypassword）完成登录后，成功跳转到 [http://127.0.0.1:9080/anything/test](http://127.0.0.1:9080/anything/test) 页面：

![图片](https://static.apiseven.com/2022/11/01/6360ee640f76d.png)

访问 [http://127.0.0.1:9080/anything/logout](http://127.0.0.1:9080/anything/logout) 退出登录：

![图片](https://static.apiseven.com/2022/11/01/6360ee619c380.png)

## 总结

本文介绍了 OAuth 协议由来和授权流程，引入更上一层的身份层协议 OIDC 并提供了详细的配置示例。
作为最流行的鉴权方式，OAuth/OIDC 通过 APISIX 的鉴权插件在 API 网关层面进行集中化鉴权管理，使得客户端和上游服务器之间免去重复繁琐的鉴权部署和维护。

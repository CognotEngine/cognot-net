export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      return Response.redirect(`https://${url.host}${url.pathname}${url.search}`, 301);
    }
    // 否则正常拉取内容
    return env.ASSETS.fetch(request);
  },
};

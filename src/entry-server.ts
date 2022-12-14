import { createApp } from "./main";
import { renderToString } from "@vue/server-renderer";

export const render = async (url: string) => {
  const { app, router, pinia } = createApp();

  // set the router to the desired URL before rendering
  await router.push(url);
  await router.isReady();

  // 注入vue ssr中的上下文对象
  const renderCtx: { modules?: string[] } = {};

  const renderedHtml = await renderToString(app, renderCtx);

  const state = JSON.stringify(pinia.state.value);

  return { renderedHtml, state };
};

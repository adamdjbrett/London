export default {
  layout: "layouts/post.hbs",
  tags: ["posts"],
  permalink: (data) => `/posts/${data.page.fileSlug}/index.html`
};

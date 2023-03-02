function tweet () {
  let not_funny = "布団が吹っ飛んだwwwwwwwwwwwwwwwww";
  not_funny=encodeURI(not_funny);
　window.location.href = "https://twitter.com/intent/tweet?text="+not_funny;
}

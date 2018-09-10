var img_chunk = {
  start: "iVBORw0KGgoAAAANSUhEUgAAA",
  a: "AAAAAXRSTlMAQObYZgAAAJVJREFUGNNdz8ENgzAMBVAjkQ1gn4zgQ0ylXLi382QEDnEPbNDOU0aoVFzboKrwL3mKvqMYNJTA0xOhg8iv2oY0EKENhhih6w2I0JEloc5wyZUUw2O6LYa81nkpCCHLa15L/Mez3t8OrsyGgacrk8LfcVgUzQY4YdxxEQXYKcn/LvJBRRhFdHpv/9Y5LhjIK16CLV75AiStSc2hKuLGAAAAAElFTkSuQmCC",
  a2: "B4AAAAeAgMAAABGXkYxAAAADFBMVEUAAA"
};
var IMGS = {
  player: img_chunk.start
  + "BQAAAAcBAMAAACT9IJTAAAAFVBMVEUAAAAAAAD///+AgIANR6H6+vohISFo84f0AAAAAXRSTlMAQObYZgAAAI9JREFUGNONzsENwjAMBdBPwwAkBc7Nn6DIC4DkBTh0AC7dfwS+m8Cll34pzotixQGsB0iPvGWcYXlZ3mGD3bQ16r53HOf9x3X9jHr3/1iynhk4XV15XQDUwkrWAgzMrFllAoNRCArqKY1Fh6A7g3SHGXNVq2lEHxcjErdIQCN2nIZO9+fZPZT0v1iimbXyBUHtH8q57nzcAAAAAElFTkSuQmCC",
  hurt: img_chunk.start
  + "BQAAAAcBAMAAACT9IJTAAAAGFBMVEUAAAAAAAD/UlKAgIC3HByenp76+vohISHDimmpAAAAAXRSTlMAQObYZgAAAJ9JREFUGNNlzbENwjAQBdBPzAB8hUAbnTxA0C0AkRdI4QFo0lNlfe4npuJLPj/bZx3gLUB6cE8/wbmubw6kw28khyrqvVZW9uKwLFzEuAtQ1P4j9Z93Udm2Tw9niyN5ywScX7q7PgHk2bJZnoHOiuUSZYSJKgYLRM8sBuIgkiYaCXcrOVpdI8oejUi2JwQcxB/HrpG8nEgpuU9aQXc/yheqsiUCe3feWwAAAABJRU5ErkJggg==",
  safe: img_chunk.start
  + "BgAAAAeBAMAAADEAMPWAAAAGFBMVEUAAAADqfQAAADo6vaAgIAhISE/UbX6+vri2c65AAAAAXRSTlMAQObYZgAAAKtJREFUGNOVkMsNAjEMRE0HsVgoYAXivBqlgEVpACJz50AK4LLtM84HzowUy0+2PI5FdtoVRERTl7IwXeeq0xpYmLft7ZSUcGEygF297384/8DsTqDPdzQ3SF3cQPTwKNTrpkKIGRGI2RfdwxCNYeGicPAAJTBlZx6QiQ1KgQNKcdMEizCkZmpVzXRC1UofUgPPadsgDFj2Azj8efTBlP9h9TfOqzU4UKFeXz5PHDoo1D2ZNAAAAABJRU5ErkJggg==",
  clock: img_chunk.start
  + "A8AAAAPBAMAAADJ+Ih5AAAAD1BMVEUAAAA+JyONbmP//ef/10BIC0P9AAAAAXRSTlMAQObYZgAAAEZJREFUCNdljbENACEMxPK/ARugwATABCj7z4ThCgquiWXJin3pzC5Y6SwDzm0bfpRzUTERW1WElMQ1rohqqPIIZTUY8Dxdjn8J+Xz9xBwAAAAASUVORK5CYII=",
  earth: img_chunk.start
  + "B8AAAAfAgMAAABiwP6qAAAADFBMVEUAAAAAaL00aSwAeL5dV4+MAAAAAXRSTlMAQObYZgAAAJFJREFUGNNNzbENAyEMBVBfJEZgiUzBCBRnCvprMs+xwVHYWSIjZYT8b3RSfgFPsvkI4qdEnj4r74e7v4lEfIDsyBfQF3CJbIGJlYUCdMCKZGJoBZrbDKjPA1DVPlV3otlBIH0QjN1oN/oCmubOHnRbJfjtH1LASqAT23olIoETyBxVIGHZCrABQyRm6I3oheMHl2pVxdCHzD8AAAAASUVORK5CYII=",
  food: [
      // commutator
    img_chunk.start
    + "B0AAAAbCAMAAAC3FHQgAAAAY1BMVEUAAABCQkKNiZekoLF6doXq5fm5tcZmYnPQy9+YlKVMSFevq7xFQk39+v/59v7j3vLV0OR2coNzcHsbFyXFws2dmqVmY2xfXGcnJC8QDBzDvtI5NkEvKjsiHi2qp7IDABABAAfKQE0KAAAAAXRSTlMAQObYZgAAAMZJREFUKM/N0leyAiEQBdB3u5vM5GR8uv9VKmUYdUa+5Qvq0Inib2XhsfkRRBZzGZDJgCdmSiKL683mAoFM4Dj891gE4oZx8t6XBVaKYWgaEhGvSiwbGVsiF9g1wj0WsxviUOmaA/m+++xchLneFaoKronHRHhpyxBrW6hS7ZiivFraylVrVRaVdaab7X6NUmylVH04bc+HmW6rFdI2WGu6o494o3SQgUhrFjJxA9xt5jSvYzJTwuUzjyStmfZbfPlr+26zahf0bwbz2yRmLAAAAABJRU5ErkJggg==",
      //battery
    img_chunk.start
    + "B0AAAAeAgMAAACtaf0yAAAADFBMVEUAAAD///+3HBxONC5tM5iQAAAAAXRSTlMAQObYZgAAAF9JREFUGNOFz7EJwDAMBEBDZpQLbxDvoxFc6KfIEtkm4ARZj5qAvxDXPLxKKcd8vpuYK1fiFs8GDRiEOjogAVsABqGOCsAIrzewLoAELMB6hRISMM4YhAa6BM7/8fnpCzU4gbY+/hfSAAAAAElFTkSuQmCC",
      //carcaza
    img_chunk.start
    + "CAAAAAfCAMAAACxiD++AAABBVBMVEUAAACpWFbqlpqn1O1lMzPM0tW0PUC5hjLrxhjHamujIyK5S0y5wMegMDaJLSxqvOWdqLqKlal6hZa6U1SrNjWLIiGQGBd0u+PGy9aBjaVqeJlcaofFdXWmKiqeIiGSHRyIyOlDrd+Ct9mWsNSHotBalMt6q8m0usUuicOosrqiq7eEk7WWnrOZpquUm6uEi5x1eZdjb4VYY3vAb2/EXl++R0mzRke5REU7tulbt+UqreWdyePX2tw8ptu4xNqnutk4mtNHmNNlodJXntHHx8o1ksastcSPnsMfiL90kLHaqKmio6dZaprJj5HLenu5ZWVWWmPDU1XATVCkUEqOODZ2Mi+hExS6t4QEAAAAAXRSTlMAQObYZgAAAVNJREFUKM+FzudygkAUhuGzgOiKICD2GmM00Wg0Rk3vvff7v5QcFlhRd8L7A2b4HmBB2PpmA5Y6LpgDy+r48+HJ8t4pFGJuW7cAp+fyWnjbGQ2fUrixvdvvQkuW02w5Yld7N5Uy/d00wbLhzAf3eQYGCHrFUrmIoAisKxSN5s1+8AurVN4GeO7FYiNgbchu/CDXNs6VyvCuVH4H1iXbD2DemBBFiScScWDlcW5CKIq7B/gf8vAym/xOXz2wR7Qw6Mty230pI0lSxduJEgI2fgC+CCEUwRiwjwXQwj0NGiGq5OadgAO8XSBoP+IziUUBMU9H8IBAUQhxPKACzMhimq7reKMcEGGfUgCoGFQ5yIjBhANHDCgHVeGuSRzUhMCJAsk5SEaB6ncEgLph/AswvZ79EQPcg+o5YxXQDISb5rKLQIWVqJPLGj5QKYh7qyFKasHX/wDA4BxJ+qGEHQAAAABJRU5ErkJggg==",
      //freq amplifier
    img_chunk.start
    + "CAAAAAXAgMAAAAXa6VyAAAADFBMVEUAAAB8s0IJAgH///9NXvGcAAAAAXRSTlMAQObYZgAAAFBJREFUCNd1z8EJwEAIBMB9pz+FKyAl3f/eW0VKi7rBBML5GnYREWANgGkxnqD5EDrZV73lWV2dvFjCETinjQCV8IOs+CSFJWirACX4n+gvbrDCRDJyLc4LAAAAAElFTkSuQmCC",
      //transistor
    img_chunk.start
    + "CAAAAAgCAYAAABzenr0AAAAVElEQVRYR2NMqO3+zzCAgHHUAaMhMBoCoyEwGgKjIQCqh2ChsKC5lBG9XsInh68OI9ZMsIXEKial0iTWzFEHjIbAaAiMhsBoCIyGwGgIjIbAgIcAADR7T2v/YpczAAAAAElFTkSuQmCC",
      //antenna
    img_chunk.start
    + "BoAAAAeCAYAAAAy2w7YAAACFElEQVRIS52Wu1XEMBBFx81QANFmdgUUQAEUQETmcTNbABGhHEECOTRjzht5rNHP0q7O2eP1T9fvzdNnoDsbM2+1V5l5SO9lF864tvNpmmgcx+jxdV3l3DknRwvsAilgnucu/QB6GBMzCSOA1AojOwWgg2kcya1rpib9ghRWAInoARBVgIfQuYWgo9S6Euzl9Y3+fr6GxDpfYGYiQKyCEqQHtiwLXd8/jHX750AJg4RfZ3OFYOirRZDaNQyLFJK2aoKjT8BTqTo9z0AHRCKyEG0zEZzdtqg+amF6rNWrDpKq7SCB3gcrKgqWERF8UEVq0B2wc9AxsoyiG2C2cLAStqFJ6uLaVBTdAAPAqslBqI3YtteIZn+ethMb9VGrBum9vl9uVFRRhsuYOdBUkU6ssE1mhjwIRlnfMKpCVE0M0iCoffbYmCF0kg0TqX9B1RwZi1Thaglma7jfd65sl8f42kBNBNKF7LjagAGis4HGOAiPIQdI+MmyIOkrwOxalANyJUd+9A8zumUqLdFpicqAOiRS5FXpyOlfImw98F9rkg2/UqAeHi8S7Oenr0bekKyLPFMDZNadAVu0FiSzrtWh3ofi3+9PWpYhivDZ+13brRAY3TQyzfO2z86hnrq1KgG7QLrtQiLR0vlMlv292UFqgU0QkjhNLtpapTvS0KEHlmBNkI19CgzjKQBqCewC2RCcFfwsff++sNw1wBQfPgAAAABJRU5ErkJggg==",
      //guide
    img_chunk.start
    + "CAAAAAgCAYAAABzenr0AAAA0klEQVRYR+2XUQ6DMAiG5Qomu/8BTbwChlrm3462bkZ8GH0x1rZ8/CUgNH0ONuZum6LqZGb2sU+0m0YAH8vZY3FUIBTA3XMEeMTzAoCX9bYgw4PpNU9qOABCgVAgFOhmQk1MKXFAktJ3eeqQ7/g+nM81wASoM2ILIFWxARyCFQ61AKx0/AsAwpn7vQHqKzFrgSxqSmbEQO8KLiuAsmlwfQM33NMLQiydZ6P77Lr3VVgA8T8QCoQCf6lAzgupQeMnFNC20B1APdfMmABc2qLDSNGRb9zBhRRRgvDsAAAAAElFTkSuQmCC"
  ],
  shield: img_chunk.start
  + "A8AAAAPBAMAAADJ+Ih5AAAAD1BMVEUAAAAPFUsBV5swP58aI377u/SMAAAAAXRSTlMAQObYZgAAAE9JREFUCNdNzcEJADEIRFGxA7NbQLSDYAWC/de0Mx7CSgif50HBxJ4/1EPRvsLwEMZhZJ7uQjyMu/pHWFeetUX9rbQQARVBQEYYIgwR7vUPPG8LGKIqw/AAAAAASUVORK5CYII=",
  a: [
    img_chunk.start + img_chunk.a2 + "BMr1D///8AAACtUrGj"
    + img_chunk.a,
    img_chunk.start + img_chunk.a2 + "D0Qzb///8AAABi95rX"
    + img_chunk.a,
    img_chunk.start + img_chunk.a2 + "AhlvP///8AAADsv1b1"
    + img_chunk.a,
    img_chunk.start + img_chunk.a2 + "D/6gD///8AAACeE2jF"
    + img_chunk.a,
    img_chunk.start + img_chunk.a2 + "CCdxf///8AAACJA08n"
    + img_chunk.a,
    img_chunk.start + img_chunk.a2 + "CcJ7D///8AAAA6K8ji"
    + img_chunk.a,
    img_chunk.start + img_chunk.a2 + "CCdxf///8AAACJA08n"
    + img_chunk.a
  ],
  satellite:
      img_chunk.start + "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"
};

function imgBase64(img) {
  return "data:image/png;base64," + img;
}
const mongoose = require("mongoose");
const uri = "mongodb://localhost/knowledge_stats";
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(uri, { useNewUrlParser: true })
  .catch((e) => {
    const msg = "ERRO: Nao foi possivel conectar com o MongoDB!";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });
  
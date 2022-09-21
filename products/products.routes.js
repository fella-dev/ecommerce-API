const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  modifyprd,
  deleteProduct,
} = require("./product.controller");
const ProductModel = require("./products.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const newprd = req.body;
  const prod = await createProduct(newprd);
  res.send(prod);
});

router.get("/", async (req, res) => {
  const { limit, sort } = req.query;
  const prds = await getAllProducts({ limit, sort });
  res.send(prds);
});
router.get("/:prdId", async (req, res) => {
  const { prdId } = req.params;

  try {
    const product = await getProductById(prdId);
    if (!product) {
      throw new Error();
    }
    res.send(product);
  } catch {
    res.status(404);
    res.send({ message: "product not found" });
  }
});
router.patch("/:prdId", async (req, res) => {
  const { prdId } = req.params;
  const newprd = req.body;
  try {
    const prd = await modifyprd(prdId, newprd);
    if (!prd) throw new Error();
    res.send(prd);
  } catch {
    res.status(404);
    res.send({ message: "product not found" });
  }
});
router.put("/:prdId", async (req, res) => {
  const { prdId } = req.params;
  const newprd = req.body;
  try {
    const prd = await modifyprd(prdId, newprd, { overwrite: true, new: true });
    if (!prd) throw new Error();
    res.send(prd);
  } catch {
    res.status(404);
    res.send({ message: "product not found" });
  }
});
router.delete("/:prdId", async (req, res) => {
  const { prdId } = req.params;
  try {
    const product = await deleteProduct(prdId);
    res.send({ message: "product deleted" });
  } catch {
    res.status(404);
    res.send({ message: "product not found" });
  }
});

module.exports = router;

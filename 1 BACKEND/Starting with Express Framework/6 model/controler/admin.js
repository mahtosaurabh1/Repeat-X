
const Product=require('../model/product')

let getAddControler=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  let postAddControler=(req, res, next) => {
    // products.push({ title: req.body.title });
    const products=new Product(req.body.title)
    products.save();
    res.redirect('/');
  }

  let allProductControler=(req, res, next) => {
    let products=Product.fetchAll();
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }


  module.exports={
    getAddControler,
    postAddControler,
    allProductControler,
  }
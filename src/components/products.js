import React from "react";
import { Link } from "react-router-dom";
import Details from "./details";
import products from "./products.json";
function Products(props) {
  return (
    <div className="mx-auto container m-5">
      <div
        className="all-products row mx-auto justify-center"
        style={{ width: "100%", margin: "auto" }}
      >
        {products.map((product) => {
          return (
            <div
              value={product.id}
              className="single-product inline-block col-6 col-md-4 col-lg-3 bg-info p-5 d-flex flex-column align-items-center justify-content-end pt-5"
              onClick={(e) => {
                var id = e.target.getAttribute("value");
                var url = "https://fakestoreapi.com/products/" + id;
                getdetails(url).then(function (response) {
                  console.log(response);
                  localStorage.setItem("item", JSON.stringify(response));
                  document.querySelector(".link").click();
                });
                async function getdetails(url) {
                  var response = await fetch(url, {
                    method: "GET",
                    // mode:'cors',
                    // credentials:'same-origin',
                    headers: {
                      Origin: "http://localhost:3001",
                      credentials: "include",
                      "Content-Type": "application/json; charset=utf-8 ",
                      Accept: "*/*",
                    },
                  });

                  response = await response.json();
                  return response;
                }
              }}
            >
              <img
                value={product.id}
                src={product.image}
                style={{ width: "50%", margin: "10px 0" }}
                alt=""
                onClick={(e) => {
                  var id = e.target.getAttribute("value");
                  var url = "https://fakestoreapi.com/products/" + id;
                  getdetails(url).then(function (response) {
                    console.log(response);
                    localStorage.setItem("item", JSON.stringify(response));
                    document.querySelector(".link").click();
                  });
                  async function getdetails(url) {
                    var response = await fetch(url, {
                      method: "GET",
                      // mode:'cors',
                      // credentials:'same-origin',
                      headers: {
                        Origin: "http://localhost:3001",
                        credentials: "include",
                        "Content-Type": "application/json; charset=utf-8 ",
                        Accept: "*/*",
                      },
                    });

                    response = await response.json();
                    return response;
                  }
                }}
              />
              <h6
                value={product.id}
                className="inline-block"
                onClick={(e) => {
                  var id = e.target.getAttribute("value");
                  var url = "https://fakestoreapi.com/products/" + id;
                  getdetails(url).then(function (response) {
                    console.log(response);
                    localStorage.setItem("item", JSON.stringify(response));
                    document.querySelector(".link").click();
                  });
                  async function getdetails(url) {
                    var response = await fetch(url, {
                      method: "GET",
                      // mode:'cors',
                      // credentials:'same-origin',
                      headers: {
                        Origin: "http://localhost:3001",
                        credentials: "include",
                        "Content-Type": "application/json; charset=utf-8 ",
                        Accept: "*/*",
                      },
                    });

                    response = await response.json();
                    return response;
                  }
                }}
              >
                {product.title}
              </h6>
              <h4
                value={product.id}
                className=""
                onClick={(e) => {
                  var id = e.target.getAttribute("value");
                  var url = "https://fakestoreapi.com/products/" + id;
                  getdetails(url).then(function (response) {
                    console.log(response);
                    localStorage.setItem("item", JSON.stringify(response));
                    document.querySelector(".link").click();
                  });
                  async function getdetails(url) {
                    var response = await fetch(url, {
                      method: "GET",
                      // mode:'cors',
                      // credentials:'same-origin',
                      headers: {
                        Origin: "http://localhost:3001",
                        credentials: "include",
                        "Content-Type": "application/json; charset=utf-8 ",
                        Accept: "*/*",
                      },
                    });

                    response = await response.json();
                    return response;
                  }
                }}
              >
                ${product.price}
              </h4>
              <Link to="/details" className="hidden link" />
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}

export default Products;

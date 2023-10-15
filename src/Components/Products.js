import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import products from "./ProductsData";
import './Products.css'

function Products() {
  return (
    <div className="shadow rounded-3 m-2 pt-2 mx-md-5 my-md-4 py-md-1">
      <div className="d-flex justify-content-between header p-2 m-md-4">
        <h4 className="main-title fw-bold my-auto">Product Sell</h4>
        <div className="d-flex">
          <div className="searchbar rounded-1 px-md-1 py-1 d-flex">
            <FontAwesomeIcon
              className="px-1 my-auto"
              icon={faMagnifyingGlass}
              style={{ color: "#a3a3a3" }}
            />
            <input
              className="border-0 w-100 bg-transparent"
              placeholder="Search"
            />
          </div>
          <div class="dropdown mx-md-3 ps-md-1 d-none d-md-block">
            <button
              class="btn text-black-50 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Last 30 Days
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" my-3">
        <div className="d-flex justify-content-between text-black-50">
          <div className="mx-2 my-1 mx-md-4 px-md-1">Product Name</div>
          <div className="d-none d-md-flex justify-content-between gap-md-5 mx-md-5">
            <div className="mx-5">Stock</div>
            <div>Price</div>
            <div>Total Stakes</div>
          </div>
        </div>
        <div className="border-top my-1 border-black-50 w-100"></div>
        <div className="mt-2">
        {products.map((item,index)=>
                    <div key={index} className="d-flex justify-content-between pe-md-4">
                      <div className="d-flex px-md-3 m-0">
                        <div className="col-3 mx-2 col-md-1 thumbnail-img ms-md-2 me-md-3 my-md-auto px-md-0"><img className="w-100 rounded-2 my-auto" src={item.thumbnail}/></div>
                        <div className="d-flex flex-column">
                          <h4 className="item-title mt-md-3">{item.title}</h4>
                          <p className="item-text text-black-50">{item.description}</p>
                        </div>
                      </div>
                      <div className="d-none d-md-flex gap-md-5 me-md-5 pe-5">
                        <div className="col-4">{item.inStock} in stock</div>
                        <div className="mx-3 pe-1"><strong>${item.price}</strong></div>
                        <div className="mx-2">{item.total_sales}</div>
                      </div>
                    </div>
                )}
        </div>
      </div>
      </div>
  );
}

export default Products;

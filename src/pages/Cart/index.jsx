import { useState, useRef } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TextField from "@material-ui/core/TextField";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import Rating from "@material-ui/lab/Rating";
import Footer from "../../components/Footer";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ProductImage from "../../assets/images/gallery/img1.jpg";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";
import { useEffect } from "react";
import { Divider } from "@material-ui/core";

const Cart = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [sum, setSum] = useState(0);

  const dt = useRef(null);

  const products = [
    {
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65.89,
      category: "Accessories",
      quantity: 1,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      name: "Black Watch",
      description: "Product Description",
      image: "black-watch.jpg",
      price: 72.99,
      category: "Accessories",
      quantity: 2,
      inventoryStatus: "INSTOCK",
      rating: 4,
    },
    {
      name: "Blue Band",
      description: "Product Description",
      image: "blue-band.jpg",
      price: 79.5,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 3,
    },
  ];

  const deleteProductFromCart = (
    <>
      <Button label="Não" icon="pi pi-times" className="p-button-text" />
      <Button
        label="Sim"
        icon="pi pi-check"
        className="p-button-text"
        style={{ color: "red" }}
      />
    </>
  );

  const actionBodyTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <FiTrash2
            size={22}
            style={{ cursor: "pointer" }}
            title="Excluir"
            color="#e24d31"
          />
        </div>
      </div>
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`${rowData.image}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className="product-image"
      />
    );
  };

  const ratingBodyTemplate = (rowData) => {
    return (
      <Rating
        name="half-rating-read"
        value={rowData.rating}
        defaultValue={2}
        precision={0.5}
        readOnly
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    );
  };

  const formatCurrency = (rowData) => {
    return (
      <h3>
        {rowData.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </h3>
    );
  };

  const quantityBodyTemplate = (rowData) => {
    return (
      <TextField
        id="standard-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={rowData.quantity}
        style={{ width: 50 }}
      />
    );
  };

  useEffect(() => {
    var total = 0;

    products.forEach((product) => {
      total += product.price * product.quantity;
    });

    setSum(total);
  }, []);

  const footer = (
    <div style={{ marginLeft: "70%", display: "flex", flexDirection: "row" }}>
      <h3>Total ${sum}</h3>&nbsp;&nbsp;<h6>With all taxes included</h6>
    </div>
  );

  const header = (
    <div
      className="table-header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <p
        style={{
          fontSize: "1.25rem",
          marginRight: 12,
        }}
      >
        YOUR CART
      </p>
      <IoCartOutline size={22} />
    </div>
  );

  const columns = [
    { header: " ", body: actionBodyTemplate },
    { field: "name", header: "Product" },
    { field: "image", body: imageBodyTemplate },
    { field: "description", header: "Description" },
    { field: "price", header: "Price", body: formatCurrency },
    { field: "quantity", header: "Quantity", body: quantityBodyTemplate },
    { field: "category", header: "Category" },
    { field: "rating", header: "Rating", body: ratingBodyTemplate },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        body={col.body}
      />
    );
  });

  return (
    <body class="header_sticky header-style-2 topbar-style-2 topbar-width-94 topbar-divider header-absolute header-center has-menu-extra">
      <div id="site-header-wrap">
        <SubHeader />
        <Header />
      </div>

      <div class="page-title parallax parallax1">
        <div class="container">
          <div class="row">
            <div class="col-md-12"></div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <div className="card">
          <DataTable
            className="p-datatable-responsive-demo"
            value={products}
            emptyMessage="Ops! Your cart is empty :("
            header={header}
            footer={footer}
            autoLayout
          >
            {dynamicColumns}
          </DataTable>

          <Dialog
            visible={openDialog}
            style={{ width: "500px" }}
            header="Hey, "
            modal
            closable={false}
            footer={deleteProductFromCart}
            onHide={openDialog}
          >
            <div className="confirmation-content">
              <span style={{ fontSize: "1.35rem" }}>Are you sure ?</span>
            </div>
          </Dialog>
        </div>
        <div className="card" style={{ width: "40%", height: "50%" }}>
          <h1>Order Summary</h1>
          <Divider />

          <p>Price</p>
          <p>Savings</p>
          <p>Shipping</p>

          <Divider />
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Cart;

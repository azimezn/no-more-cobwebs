import React from "react";
import "./style.css";

export default function Navigation({ currentPage, handlePageChange }) {

    return (
        <>
            <div className="helloEric">this is a navbar</div>
            <ul>
                <li>
                    <a
                        href="#home"
                        // onClick={() => handlePageChange("Home")}
                        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
                    >Home</a>
                </li>
                <li>
                    <a
                        href="#drumkit"
                        onClick={() => handlePageChange("Drumkit")}
                        className={currentPage === "Drumkit" ? "nav-link active" : "nav-link"}
                    >Drumkit</a>
                </li>
            </ul>


        </>
    );
}
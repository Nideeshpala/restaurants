import React from 'react'

function Header() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container-fluid">
                    <i class="fa-solid fa-utensils fa-2xl" style={{ color: "#1e5ecc" }}></i>
                    <a class="navbar-brand" href="#">Find Best</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor01">


                    </div>
                </div>
            </nav>

    </div>
  )
}

export default Header
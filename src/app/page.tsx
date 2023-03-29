"use client"
import useSWR from "swr"
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

//const fetcher = () => fetch("").then(res => res.json)

interface ProductState {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function Home() {
  const [product, setProduct] = useState<ProductState | undefined>();
  //const carts = useSWR("", fetcher)
  useEffect(()=>{
    const headers = { 'X-Auth-Token': 'wo9e40w72wf7f21kpz3xfgfiwmeffz'}
    fetch("https://api.bigcommerce.com/stores/s9ye4xe3x0/v3/catalog/products", {
        "mode":"cors",
        'headers': {
            'Access-Control-Allow-Origin': '*',           //BIG-COMMERCE API, NO ACEPTA CORS, AL DEFINIR EL MODO NO-CORS DEVUELVE UN OBJETO OPAQUE
            'X-Auth-Token': 'wo9e40w72wf7f21kpz3xfgfiwmeffz',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => setProduct(data));
    console.log(product)
  })

  return (
    <main>
      <p>HELLO</p>
      {product?.map(prod => 
          <p key={prod.id}>{prod.name}</p>
        )}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () =>{
  const res = await fetch("")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

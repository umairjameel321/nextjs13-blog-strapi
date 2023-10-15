"use client";
import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

const Categories = ({ categories }: any) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[0].attributes.Title);
  }, []);

  return (
    <div className="flex gap-6 mb-8">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;

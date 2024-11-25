"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const page = parseInt(searchParams.get("page") || "1");
  const params = new URLSearchParams(searchParams);
  const itemsPerPage = 2;

  // Determine if the Previous and Next buttons should be enabled
  const prev = page > 1;
  const next = page < Math.ceil(count / itemsPerPage);

  const handleChangePage = (type) => {
    if (type === "prev" && prev) {
      params.set("page", page - 1);
    } else if (type === "next" && next) {
      params.set("page", page + 1);
    }
    replace(`${pathName}?${params}`);
  };

  return (
    <div>
      <div className="btns flex justify-between p-4">
        <button
          className="bg-blue-900 text-white p-4"
          disabled={!prev}
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </button>
        <button
          className="bg-yellow-600 p-4"
          disabled={!next}
          onClick={() => handleChangePage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;

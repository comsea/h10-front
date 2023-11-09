import React, { useState, useEffect } from "react"
import { FaAngleUp } from "react-icons/fa"

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="relative">
      {" "}
      {showTopBtn && (
        <FaAngleUp
          className="fixed bottom-10 right-4 z-50 bg-darkblue cursor-pointer rounded-full text-white w-[40px] h-[40px] border border-[#931212]"
          onClick={goToTop}
        />
      )}{" "}
    </div>
  )
}

export default BackToTop
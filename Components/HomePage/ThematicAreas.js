"use client";
import { useState } from "react";
import { ThematicAreas } from "@/utils/data";
import { FiArrowRight } from "react-icons/fi";
import Modal from "./Modal"; // If placed in a separate file
import Image from "next/image";

export default function CardsLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (card) => {
    setModalContent(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <div className="text-center flex justify-center flex-col items-center mt-20">
        <p className="custom-title lg:text-3xl text-xl">Thematic Areas</p>
        <p className="lg:text-5xl text-2xl secondary-title lg:w-[50vw] my-3">
          Building Resilience through Workforce Wellbeing and Inclusive
          Practices
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 border border-gray-300">
          {ThematicAreas.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white overflow-hidden lg:p-10 p-3 group 
              ${
                index < ThematicAreas.length - 2
                  ? "border-b border-gray-300"
                  : ""
              }
              ${index % 2 === 0 ? "md:border-r border-gray-300" : ""}`}
              onClick={() => openModal(card)} // Open modal on card click
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-[#E8E8E8] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                  width={400}
                  height={400}
                    src={card.image}
                    alt={card.title}
                    className="h-80 object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center transition-colors duration-300">
                    {card.title}
                    <span className="ml-2 transform transition-transform duration-500 group-hover:scale-150">
                      <FiArrowRight className="text-[#E82B52] text-[20px]" />
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-2 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </>
  );
}

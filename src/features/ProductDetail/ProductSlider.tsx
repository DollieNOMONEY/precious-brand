import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Define a type for the image objects
interface ProductImage {
    src: string;
    alt: string;
}

const productImages: ProductImage[] = [
    { src: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg", alt: "Front View of Clothing" },
    { src: "/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg", alt: "Back View of Clothing" },
    { src: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg", alt: "Front View of Clothing" },
    { src: "/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg", alt: "Back View of Clothing" },
];

export default function ProductSlider() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);

    const openModal = (image: ProductImage) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedImage(null);
    }, []);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isModalOpen, closeModal]);

    return (
        <section className='flex ga5p- overflow-x-scroll md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-0 md:overflow-hidden'>
            {productImages.map((image, index) => (
                <button 
                    key={index} 
                    onClick={() => openModal(image)}
                    className='w-full shrink-0 md:w-auto md:h-auto hover:cursor-pointer scale-[98%]'
                >
                    <div className='w-full aspect-[4/5] overflow-hidden'>
                        <Image
                            className='w-full h-full object-cover brightness-95 scale-[98%]'
                            src={image.src}
                            alt={image.alt}
                            draggable={false}
                            fill
                        />
                    </div>
                </button>
            ))}
            
            {/* The Modal */}
            {isModalOpen && selectedImage && (
                <button 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 p-4 group"
                    onClick={closeModal}
                >
                    <div className="relative w-full max-w-5xl">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="object-contain w-full h-auto group-hover:cursor-zoom-out"
                            layout="responsive"
                            width={1250}
                            height={1250}
                        />
                    </div>
                </button>
            )}
        </section>
    );
}

'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { productCategories, products, type Product, type ProductCategory, type ProductImage } from '@/lib/products'

export function ProductCatalog() {
  const [category, setCategory] = useState<ProductCategory>('All products')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeImage, setActiveImage] = useState<ProductImage | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const railRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visibleProducts = category === 'All products'
    ? products
    : products.filter((product) => product.category === category)

  useEffect(() => {
    const dialog = dialogRef.current
    if (selectedProduct && dialog && !dialog.open) dialog.showModal()
    if (!selectedProduct && dialog?.open) dialog.close()
  }, [selectedProduct])

  function updateActiveCard() {
    const rail = railRef.current
    if (!rail) return
    const center = rail.scrollLeft + rail.clientWidth / 2
    let closest = 0
    let distance = Infinity
    Array.from(rail.children).forEach((card, index) => {
      const element = card as HTMLElement
      const cardCenter = element.offsetLeft + element.offsetWidth / 2
      if (Math.abs(center - cardCenter) < distance) {
        distance = Math.abs(center - cardCenter)
        closest = index
      }
    })
    setActiveIndex(closest)
  }

  function chooseCategory(nextCategory: ProductCategory) {
    setCategory(nextCategory)
    setActiveIndex(0)
    if (railRef.current) railRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }

  function openProduct(product: Product) {
    setActiveImage(product.gallery[0])
    setSelectedProduct(product)
  }

  return (
    <>
      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark-eyebrow">A FEW GOOD THINGS <span className="eyebrow-index">THE NERO RANGE / 01—08</span></p>
            <h2>Everyday essentials.<br /><span>Exceptionally chosen.</span></h2>
          </div>
          <div className="section-intro-wrap">
            <p className="section-intro">Explore Nero switches, sockets, lighting, and the details that make a project come together.</p>
            <span className="rail-hint"><span>CHOOSE A CATEGORY, THEN EXPLORE</span><ArrowRight size={15} /></span>
          </div>
        </div>

        <div className="product-filters" role="group" aria-label="Filter products by category">
          {productCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? 'product-filter product-filter--active' : 'product-filter'}
              aria-pressed={category === item}
              onClick={() => chooseCategory(item)}
            >
              {item}<span>{item === 'All products' ? products.length : products.filter((product) => product.category === item).length}</span>
            </button>
          ))}
        </div>

        <div className="product-rail" ref={railRef} onScroll={updateActiveCard} aria-label="Nero Electrical products">
          {visibleProducts.map((product, index) => (
            <button
              type="button"
              key={product.id}
              className={`product-card product-card--${product.tone} ${activeIndex === index ? 'product-card--active' : ''}`}
              onClick={() => openProduct(product)}
              aria-label={`View details for ${product.name}`}
            >
              <span className="product-art">
                <Image src={product.gallery[0].src} alt={product.gallery[0].alt} fill sizes="(max-width: 700px) 75vw, 28vw" />
                <span className="product-arrow"><ArrowUpRight size={19} /></span>
                <span className="product-view-label">VIEW DETAILS</span>
              </span>
              <span className="product-info">
                <span className="product-kicker">
                  <span>{product.number} / NERO PICKS</span>
                  <span>{product.category.toUpperCase()}</span>
                </span>
                <span className="product-name">{product.name}</span>
                <span className="product-description">{product.detail}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="rail-progress" aria-label={`Showing item ${activeIndex + 1} of ${visibleProducts.length}`}>
          <span className="rail-progress-label">{String(activeIndex + 1).padStart(2, '0')} <i>/ {String(visibleProducts.length).padStart(2, '0')}</i></span>
          <div className="rail-progress-track">
            <span style={{ width: `${((activeIndex + 1) / visibleProducts.length) * 100}%` }} />
          </div>
          <div className="rail-controls">
            <button type="button" aria-label="Previous product" onClick={() => railRef.current?.scrollBy({ left: -350, behavior: 'smooth' })}>←</button>
            <button type="button" aria-label="Next product" onClick={() => railRef.current?.scrollBy({ left: 350, behavior: 'smooth' })}>→</button>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="product-dialog"
        aria-labelledby="product-dialog-title"
        onClose={() => setSelectedProduct(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {selectedProduct && activeImage && (
          <div className="product-dialog-layout">
            <div className="dialog-image-panel">
              <div className="dialog-image-stage">
                <Image
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 60vw"
                  className="dialog-main-image"
                  priority
                />
                <span className="dialog-image-ref">NERO / {selectedProduct.number}</span>
              </div>
              {selectedProduct.gallery.length > 1 && (
                <div className="dialog-gallery" role="group" aria-label={`${selectedProduct.name} product images`}>
                  {selectedProduct.gallery.map((img) => (
                    <button
                      key={img.src}
                      type="button"
                      className={`dialog-thumbnail ${activeImage.src === img.src ? 'dialog-thumbnail--active' : ''}`}
                      onClick={() => setActiveImage(img)}
                      aria-label={`View ${img.label}`}
                    >
                      <Image src={img.src} alt={img.alt} fill sizes="84px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="dialog-details-panel">
              <button
                type="button"
                className="dialog-close"
                aria-label="Close product details"
                onClick={() => dialogRef.current?.close()}
              >
                <X size={21} />
              </button>

              <p className="eyebrow dark-eyebrow">
                REF. NERO-{selectedProduct.number}{' '}
                <span className="availability">
                  <span /> AVAILABLE TO ORDER
                </span>
              </p>
              <h2 id="product-dialog-title">{selectedProduct.name}</h2>
              <p className="dialog-description">{selectedProduct.description}</p>

              <h3 className="dialog-information-title">SPECIFICATIONS</h3>
              <dl className="dialog-spec-list">
                {selectedProduct.specifications.map((spec) => (
                  <div key={spec.label} className="dialog-spec-row">
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="dialog-image-caption">
                <span>CURRENT VIEW</span>
                <i>{activeImage.label}</i>
              </div>

              <div className="dialog-action-wrap">
                <a
                  href="#contact"
                  className="dialog-inquire-btn"
                  onClick={() => dialogRef.current?.close()}
                >
                  Inquire about this product <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

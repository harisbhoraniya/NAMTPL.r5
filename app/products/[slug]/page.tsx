import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { products, getProductBySlug } from "@/lib/products-data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-12 pb-14">
        <div className="max-w-[1000px] mx-auto px-6">
          <Link
            href={product.categoryHref}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6e6e73] hover:text-[#8c2442] transition-colors mb-8"
          >
            <RiArrowLeftLine size={14} /> Back to Products
          </Link>

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-3">
            {product.category}
          </p>
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <h1 className="text-[40px] sm:text-[48px] font-semibold tracking-[-0.04em] text-[#1d1d1f] leading-[1.05]">
              {product.name}
            </h1>
            {product.color && (
              <span
                className="w-8 h-8 rounded-full border border-[#e8e8ed] shrink-0"
                style={{ background: product.color }}
              />
            )}
          </div>
          {product.subtitle && (
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#004428] mb-4">
              {product.subtitle}
            </p>
          )}
          <p className="text-[17px] text-[#6e6e73] leading-relaxed max-w-2xl">{product.description}</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-[#f5f5f7]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden aspect-[16/7] card-hover">
            <img src={product.heroImg} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6">
        {/* Particle size */}
        {product.particleSizes && (
          <section className="py-14 border-b border-[#e8e8ed]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
              Particle Size
            </p>
            <div className="flex flex-col gap-2">
              {product.particleSizes.map((ps) => (
                <div
                  key={ps.label}
                  className="flex items-center justify-between bg-[#f5f5f7] rounded-lg px-5 py-3.5"
                >
                  <span className="text-[14px] text-[#1d1d1f] font-medium">{ps.label}</span>
                  <span className="text-[14px] font-semibold text-[#004428] ml-4 shrink-0">{ps.range}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical parameters table */}
        {product.techTable && (
          <section className="py-14 border-b border-[#e8e8ed]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
              Technical Parameters
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#e8e8ed]">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr>
                    <th className="bg-[#004428] text-white text-[13px] font-semibold uppercase tracking-wide px-5 py-3.5">
                      {product.techTable.rowHeader}
                    </th>
                    {product.techTable.columns.map((col) => (
                      <th
                        key={col}
                        className="bg-[#004428] text-white text-[13px] font-semibold px-5 py-3.5 text-left"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.techTable.rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"}>
                      <td className="text-[13px] font-medium text-[#1d1d1f] px-5 py-3 border-t border-[#e8e8ed]">
                        {row.label}
                      </td>
                      {row.values.map((v, j) => (
                        <td
                          key={j}
                          className="text-[13px] text-[#6e6e73] px-5 py-3 border-t border-[#e8e8ed]"
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Process characteristics */}
        {product.processCharacteristics && (
          <section className="py-14 border-b border-[#e8e8ed]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
              Product Process Characteristics
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {product.processCharacteristics.map((pc) => (
                <div key={pc.title} className="rounded-xl border border-[#e8e8ed] bg-[#fbfbfd] p-6">
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-3">{pc.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {pc.points.map((pt, i) => (
                      <li key={i} className="text-[13px] text-[#6e6e73] leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004428] mt-1.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ball diameter specification table */}
        {product.ballDiameterSpec && (
          <section className="py-14 border-b border-[#e8e8ed]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
              Ball Diameter Specification
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#e8e8ed]">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr>
                    {["Particle Size", "Median Diameter (mm)", "Sphere Diameter Range (mm)", "Max Distribution (mm)", "Max Distribution Ratio (%)", "Out of Tolerance Rate (%)"].map(
                      (h) => (
                        <th
                          key={h}
                          className="bg-[#004428] text-white text-[12px] font-semibold px-4 py-3 text-left whitespace-nowrap"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {product.ballDiameterSpec.map((row, i) => (
                    <tr key={row.particleSize} className={i % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"}>
                      <td className="text-[13px] font-medium text-[#1d1d1f] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.particleSize}
                      </td>
                      <td className="text-[13px] text-[#6e6e73] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.medianDiameter}
                      </td>
                      <td className="text-[13px] text-[#6e6e73] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.sphereDiameterRange}
                      </td>
                      <td className="text-[13px] text-[#6e6e73] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.maxDistribution}
                      </td>
                      <td className="text-[13px] text-[#6e6e73] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.maxDistributionRatio}
                      </td>
                      <td className="text-[13px] text-[#6e6e73] px-4 py-2.5 border-t border-[#e8e8ed] whitespace-nowrap">
                        {row.outOfToleranceRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#86868b] mt-3">
              * Products can be customised to specific particle size distribution and application requirements.
            </p>
          </section>
        )}

        {/* Applications */}
        {product.applications && (
          <section className="py-14 border-b border-[#e8e8ed]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
              Applications
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {product.applications.map((a) => (
                <li key={a} className="text-[14px] text-[#6e6e73] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004428] mt-1.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Representative products */}
        {product.representativeProducts && (
          <section className="py-14 border-b border-[#e8e8ed]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-5">
              Representative Products
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {product.representativeProducts.map((a) => (
                <li key={a} className="text-[14px] text-[#6e6e73] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004428] mt-1.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 text-center">
          <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-3">Interested in this product?</h3>
          <p className="text-[15px] text-[#6e6e73] mb-6">
            Get in touch for pricing, samples, or custom specifications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d1d1f] text-white rounded-full text-[14px] font-medium hover:bg-[#8c2442] transition-colors card-hover"
          >
            Request a Quote <RiArrowRightLine size={14} />
          </Link>
        </section>
      </div>
    </>
  );
}
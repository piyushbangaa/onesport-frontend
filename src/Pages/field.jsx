import React from "react";

const Field = () => { 
  const schools = [
    { name: "Lancer's Convent", image: "https://content.jdmagicbox.com/v2/comp/delhi/pp/011pxx11.xx11.090809320353.iapp/catalogue/lancer-s-convent-school-prashant-vihar-delhi-schools-1hazb7x.jpg", address: "Prashant Vihar",  mapLink: "https://www.google.com/maps/dir//Lancer's+Convent,+Outer+Ring+Road,+Rohini,+Near+Rohini+Court+D,+Sector+14,+Rohini,+Prashant+Vihar+Rd,+Delhi,+110085/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d016250fe4729:0x6e244ea34871903d?sa=X&ved=1t:57443&ictx=111", SlotLink: "#" },
    { name: "SD Public School", image: "https://content.jdmagicbox.com/v2/comp/delhi/d3/011pxx11.xx11.130113140001.p1d3/catalogue/s-d-public-school-tajpur-khurd-delhi-girls-schools-4uorbr3g1h.jpg", mapLink: "https://www.google.com/maps/dir//S+D+Public+School,+BU+Block,+Pitampura,+New+Delhi,+Delhi+110088/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d017a4bfffffd:0x7a61451dd000db29?sa=X&ved=1t:57443&ictx=111", address: "Pitampura", SlotLink: "#" },
    { name: "Morden School BK", image: "https://modernschool.net/wp-content/uploads/2019/04/p2.jpg", mapLink: "https://www.google.com/maps?sca_esv=afb5579b9aac608a&sxsrf=AHTn8zoEpANd5UbuJf14NpMNA-vdIqiNXw:1742907113869&fbs=ABzOT_AnTKjm8AsviXK_Zi7xykdS-H-kXO3AkxSU-rxROvofL8SbMHB8BP3aODdDrYoLESvzQ_38RiN--O_9UU40wWCP_0sfvac7s4cOb4baCw7TURK9iqu2V3-i8JgfI0yST3NsfsxW38zrkKmDgHCAguL2DB39gHhmnbW5dJKVjAw4N_itxenmNzC4MtxdPal8Zs_uVK-WXsoowXtK_GrXMeLppPWkRjB2TFMdgQfHKpqGXFrzaxc&biw=1280&bih=712&dpr=2&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQVAhfUt_Qw5MS2TS5gbrS-e&daddr=J6HH%2BMMC,+Barakhamba+Rd,+Todermal+Road+Area,+Mandi+House,+New+Delhi,+Delhi+110001", address: "Central Delhi", SlotLink: "#" },
    { name: "Prudence School", image: "https://www.prudenceschools.com/wap/uploads/school-av.jpg", mapLink: "https://www.google.com/maps/place/PRUDENCE+SCHOOL-ASHOK+VIHAR,+CH+Devender+Singh+Tewatia+Marg,+Ashok+Vihar,+Delhi,+110052/data=!4m2!3m1!1s0x390d0217c3ad7c3d:0x5598fd8364606c82?sa=X&ved=1t:242&ictx=111", address: "Ashok Vihar",SlotLink: "#" },
    { name: "DPS", image: "https://content.jdmagicbox.com/comp/delhi/83/011p57383/catalogue/delhi-public-school-mathura-road-delhi-schools-39f81.jpg", mapLink: "https://www.google.com/maps?sca_esv=afb5579b9aac608a&sxsrf=AHTn8zp_Pvs7ZUbKHYjIGtVQVDsgId-t8w:1742907421766&fbs=ABzOT_BX-QpElnhr0uK0BVtuIT4CMWc74XQWG4wtYyJsj2uapSyHfQ6RuGFbyT2MO76VMcUEOwTCVEcAG2OuP_cGoP5sEF4b4NhI3Wgj9vt8sNByrr3myPsasZaii30wd4PgYJf3z8gXsr-_ZqHvAE4uKp0nPpkXpyEAxSqnLWMXknEh1jBizSx9CCTM3K5TstsijDwv_gj3IsIJV1BrpPoHO0DKXjVK0mLO-PDWZn8X149LdunZdSQ&biw=1280&bih=712&dpr=2&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUklEgLg4gw5MWIFO7-LYQaG&daddr=130,+Mathura+Rd,+National+Zoological+Park,+Sundar+Nagar,+New+Delhi,+Delhi+110003" , address: "Rohini", SlotLink: "#"},
    { name: "St.Columba's School", image: "https://media.licdn.com/dms/image/v2/C511BAQEuSTYnUSnOQg/company-background_10000/company-background_10000/0/1584229044440/st_columbas_school_scs_cover?e=2147483647&v=beta&t=ZWbC3RxFywsOzgKBIUEZBfjCvBn3wDkFRZcD0Nhu32Y", mapLink: "https://www.google.com/maps?sca_esv=afb5579b9aac608a&sxsrf=AHTn8zrcZYr_Wl0ehOCSUHCOxIdeLzjx_Q:1742907613273&fbs=ABzOT_BX-QpElnhr0uK0BVtuIT4CMWc74XQWG4wtYyJsj2uapSyHfQ6RuGFbyT2MO76VMcUEOwTCVEcAG2OuP_cGoP5sEF4b4NhI3Wgj9vt8sNByrr3myPsasZaii30wd4PgYJf3z8gXsr-_ZqHvAE4uKp0nPpkXpyEAxSqnLWMXknEh1jBizSx9CCTM3K5TstsijDwv_gj3IsIJV1BrpPoHO0DKXjVK0mLO-PDWZn8X149LdunZdSQ&biw=1280&bih=712&dpr=2&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZPFEtxR_Qw5MUoWvisqDaYP&daddr=No.+1,+Ashok+Place,+Bhai+Vir+Singh+Marg,+Near+Gole+Dakhana,+Gole+Market,+New+Delhi,+Delhi+110001" , address: "Central Delhi", SlotLink: "#"},
    { name: "British School", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHkgIM3J_K9VQiJbJaCptGYE8piG-Zcz3tA&s", mapLink: "https://www.google.com/maps?sca_esv=afb5579b9aac608a&sxsrf=AHTn8zrISPVDos-CFIBLLS27MK9mraO9Dw:1742907749256&fbs=ABzOT_BF2BQKolEz0Jz2KKb_4ZjDZ8R99aiy1vHXPUvKlMD_owXJuSJp1BvNBFRzUG6jPnRrjG8z2e8BUNGD66KSo9F56VJfpz7tXYZ-0_wIScQA99T_PxDW0npzuhtZIbU5avNEknL0fkSPRklfZBniECgsqLb9wdZGDSuZbYEGNvup8G8tZ4xAbK8o5ahfrI-pXjqqzkwck6RtHjt-SN63EXyYpnZLaGNb693vFlFb6Od-PHwPbl4&biw=1280&bih=712&dpr=2&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KetCmYdCHQ05MYmX39jVo2BY&daddr=Dr+Jose+P+Rizal+Marg,+Chanakyapuri,+New+Delhi,+Delhi+110021" , address: "Chanakyapuri", SlotLink: "#"},
    { name: "Venkateshwar School", image: "https://images.uniapply.com/uploads/college/image/500/2180/webp/Venkateshwar_Global_School_1555_Building_1.webp", mapLink: "https://www.google.com/maps?sca_esv=afb5579b9aac608a&sxsrf=AHTn8zr9V7zF2esGtLSOcArBzazolM-c9w:1742926839122&fbs=ABzOT_DnPN66xNYYiVBYF80MNa9-WXlx6-Gn4F9E0LjJnsdErVa_gKhDHt_BGWn3bS5PySMq888m6Gf-C7gV9pa3nPTuli0CjSV-Xla8nzl3H27oDYS-KnR-Gj2UNE7cXbvO74iDE4crrxdCgYxiomJSRkxZCD7F1bv453EZWPSBf0dHLSAWKOmMjPK8-jMMy_9bmLEs6hRQueWch3ljmvqi-CZBbkChmO6-hFe82DjLfO3068iWnoM&biw=1280&bih=712&dpr=2&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kdnj6RpmAQ05MXfWNGmvH8RJ&daddr=Ekta+Apartment,+Rohini+Sector+13,+Pocket+23,+Sector+13,+Rohini,+Delhi,+110085" , address: "Rohini", SlotLink: "#"},
  ]; 

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {schools.map((school, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-800 h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={school.image}
              alt={school.name}
              className="w-full h-45 object-cover"
            />
            
            <div className="p-4 flex flex-col flex-grow">
              <div className="text-center text-white font-semibold text-xl mb-1">
                {school.name}
              </div>

              <div className="text-center text-gray-300 -mt-2 text-sm mb-4">
                {school.address}
              </div>

              <div className="mt-auto flex justify-center gap-3">
                <a
                  href={school.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Directions
                </a>
                <a 
                  href={school.SlotLink}
                  className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Field;
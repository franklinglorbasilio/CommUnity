import logo1 from "../../assets/community-icon.png";
import logo2 from "../../assets/photo/partner.png";
import logo3 from "../../assets/photo/partner1.jpg";
import logo4 from "../../assets/photo/partner3.jpg";

export default function PartnerBanner() {
    const partners = [
        { logo: logo1 },
        { logo: logo2 },
        { logo: logo3 },
        { logo: logo4 }
    ];

    return (
        <div className="bg-black py-6 flex flex-col items-center w-full">
            <div className="flex justify-center items-center gap-5 flex-wrap w-full text-center">
                <div className="flex justify-center w-full gap-6"> {/* Added spacing between images */}
                    {partners.map((partner, index) => (
                        <img
                            key={index}
                            src={partner.logo}
                            alt={`Partner ${index + 1}`}
                            className="h-10 w-20 object-contain m-md-5 filter blur-md brightness-75 opacity-50"
                            height={100}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

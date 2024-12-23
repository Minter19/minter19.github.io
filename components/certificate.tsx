
import { lisencesData } from "@/app/data/lisences";
import { ILisencesData } from "@/app/types/lisences";
import { Fade } from "react-awesome-reveal";


export default function Certificate() {
    return (
        <section id="certificate" className="py-4 px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Lisences & Certifications</h2>
            {
                lisencesData && lisencesData.map((lisence: ILisencesData) => (
                    <div key={lisence.id}>
                        <Fade>
                        <div className="flex mt-4">
                            <div className="flex-shrink-0">
                                <img src={lisence.logoUrl} width={80} height={80} alt={`logo of ${lisence.credentialID}`}/>
                            </div>
                            <div className="pl-2">
                                <h2 className="font-bold">{lisence.name}</h2>
                                <p>{lisence.company}</p>
                                <p className="text-slate-600">Issued {lisence.issuedDate}</p>
                                {lisence.credentialID && <p className="text-slate-600">Credential ID {lisence.credentialID}</p>}
                                {lisence.skills && <p className="my-2"><strong>Skills:</strong> {lisence.skills}</p>}
                            </div>
                        </div>
                        </Fade>
                        <hr />
                    </div>
                )

            )}
        </section>
)}
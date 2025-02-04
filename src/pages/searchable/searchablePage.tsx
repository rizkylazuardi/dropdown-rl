import { colourOptions } from "../../data/dummy";
import SelectBox from "../../components/selectbox/selectBox";
import './../../App.css'

/**
 * Sample Page of Searchable Toogle
 */
export interface SearchableAttr {
    isSearchable: boolean,
}

const SearchablePage = (props: SearchableAttr) => {
    const { isSearchable=true } = props;
    
    return (
        <>
            <div className="bg-white h-screen justify-self-center w-4/5 border-1 border-gray-400 rounded-lg p-4">
                <h2 className="font-bold text-xl">This is the sample of Searchable Feature of Dropdown RL</h2>
                <div>
                    <h3>
                        Basic Usage, already support Tailwind CSS.
                    </h3>        
                    <div className="pt-8">
                        <div>
                            <span>to enable/disable searchable feature, please add this attribute below :</span>
                            <div className="border-l-5 border-gray-600 bg-gray-200 p-2 w-1/4 m-2 italic">
                                    isSearchable = true
                            </div>
                        </div>
                        <h2 className="font-bold mt-6">Preview</h2>
                        <SelectBox options={colourOptions} isSearchable={isSearchable} name="searchable_feature" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchablePage;
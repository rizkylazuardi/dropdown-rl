import React from "react";
import SelectBox from "../../components/selectbox/selectBox";
import './../../App.css'
import { OptionType } from "../../components/selectbox/selectBoxModel";

/**
 * Sample Page of Custom Option Render 
 */
export interface OptionRenderAttr {
    isSearchable: boolean,
    options: OptionType[],
    renderOption: (param: OptionType) => JSX.Element
}

const OptionRenderPage = (props: OptionRenderAttr) => {
    const { isSearchable=true, options, renderOption } = props;
    
    return (
        <>
            <div className="bg-white h-screen justify-self-center w-4/5 border-1 border-gray-400 rounded-lg p-4">
                <h2 className="font-bold text-xl">This is the sample of Custom Option Render</h2>
                <div>
                    <h3>
                        Basic Usage, already support Tailwind CSS.
                    </h3>        
                    <div className="pt-8">
                        <div>
                            <span>to custom option render feature, please add this attribute optionRender as example below :</span>
                            <div className="border-l-5 border-gray-600 bg-gray-200 p-2 w-3/4 m-2 italic">
                                {/* just for snippet the code in storybook */}
                                <pre><code>
                                const renderOption = (param) =&gt; &#123;<br/>
                                &nbsp;&nbsp;const &#123; label, value, additionalField &#125; = param;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;return (<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div style=&#123;&#123; display: "flex" &#125;&#125;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;&#123;label&#125;&lt;/div&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div style=&#123;&#123; marginLeft: "10px", color: "#ccc" &#125;&#125;&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index ke - &#123;additionalField&#125;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                &nbsp;&nbsp;)<br/>
                                &#125;; <br/>
                                &lt;SelectBox options=&#123;options&#125; renderOption=&#123;renderOption&#125;/&gt;
                                </code></pre>
                            </div>
                        </div>
                        <h2 className="font-bold mt-6">Preview</h2>
                        <SelectBox options={options} isSearchable={isSearchable} name="searchable_feature" renderOption={renderOption}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OptionRenderPage;
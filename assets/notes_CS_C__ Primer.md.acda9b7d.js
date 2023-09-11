import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.1fa2d359.js";const u=JSON.parse('{"title":"C++ Primer","description":"","frontmatter":{},"headers":[],"relativePath":"notes/CS/C++ Primer.md","filePath":"notes/CS/C++ Primer.md","lastUpdated":1694435301000}'),i={name:"notes/CS/C++ Primer.md"},s=r('<h1 id="c-primer" tabindex="-1">C++ Primer <a class="header-anchor" href="#c-primer" aria-label="Permalink to &quot;C++ Primer&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_2-variables-and-basic-types">2 Variables and Basic types</a></li><li><a href="#_3-strings-vectors-and-arrays">3 Strings Vectors and Arrays</a><ul><li><a href="#_3-1-namespace">3.1 Namespace</a></li><li><a href="#_3-2-string">3.2 String</a></li><li><a href="#_3-3-vectors">3.3 Vectors</a></li><li><a href="#_3-4-iterator">3.4 Iterator</a></li><li><a href="#_3-5-arrays">3.5 Arrays</a></li><li><a href="#_3-6-multi-d-arrays">3.6 Multi-D arrays</a></li></ul></li></ul></nav><p>A deficient skyscraper engenders catastrophic consequences for the overall infrastructure.Consequently, the process of reacquainting oneself with the intricacies of C++ is an inevitable undertaking in the life of an algorithm engineer. Thus, it is advisable to desist from excessive discourse and instead focus on the practical implementation of the code.</p><p>The organization of the note diverges from that of the book, owing to the fact that a substantial portion of the knowledge I had previously acquired remains ingrained in my understanding.</p><hr><p>I. Basic</p><h2 id="_2-variables-and-basic-types" tabindex="-1">2 Variables and Basic types <a class="header-anchor" href="#_2-variables-and-basic-types" aria-label="Permalink to &quot;2 Variables and Basic types&quot;">​</a></h2><ul><li><p>[ ] Basic Variable types and their storage</p></li><li><p>[ ] Type Conversions</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_08_225567d6d3cf48d41db01efab8794c0f.png" alt="screenshot 2023-09-08 at 2.15.45 PM"></p><p>In truncate part, will conversions be time-consuming? Considering that a double was calculated by the powers of 2, how can you convert?</p></li><li><p>[ ] When a type is unsigned, what is its range</p></li><li><p>[ ] Discuss the relationship between literals and types<img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_08_507e6a18755b627c2443d78ec711921b.png" alt="screenshot 2023-09-08 at 2.12.57 PM"></p></li><li><p>[ ] WTF is a wide character. Wide characters&#39; literals are <code>L&#39;a&#39;</code></p></li></ul><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_08_476b522cb8c4caecc2450837b76c9aa2.png" alt="screenshot 2023-09-08 at 2.25.38 PM"></p><p>This Warning is quite touching to me &#39;cause no one had ever noticed me of before.</p><h2 id="_3-strings-vectors-and-arrays" tabindex="-1">3 Strings Vectors and Arrays <a class="header-anchor" href="#_3-strings-vectors-and-arrays" aria-label="Permalink to &quot;3 Strings Vectors and Arrays&quot;">​</a></h2><p>Strings and Vectors are widely used. String can be initialized in several ways.</p><h3 id="_3-1-namespace" tabindex="-1">3.1 Namespace <a class="header-anchor" href="#_3-1-namespace" aria-label="Permalink to &quot;3.1 Namespace&quot;">​</a></h3><h3 id="_3-2-string" tabindex="-1">3.2 String <a class="header-anchor" href="#_3-2-string" aria-label="Permalink to &quot;3.2 String&quot;">​</a></h3><p>You can treat strings like basic types or objects(be careful not to use {})</p><p>It&#39;s pretty tricky that concatenating string using <code>&quot;&quot;</code> , remembering left hand assign rule.</p><p>Strings has <code>size()</code> and <code>empty()</code>, not <code>isempty()</code>. ehhh..</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_84bc8c9639e8691aba7cf5d910fbc634.png" alt="screenshot 2023-09-10 at 9.05.17 PM"></p><p>The reason is listed below:</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_0209e0ac288ae8c5c0f005977954dc2c.png" alt="screenshot 2023-09-10 at 9.09.12 PM"></p><p>Literals matter.</p><p><code>decltype(type)</code> good stuff if you don&#39;t know witch type.</p><p>To iterate char in string, copy/ change is different.</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_9d7a227f0640dfcbf99736ed485869ab.png" alt="screenshot 2023-09-10 at 9.23.13 PM"></p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_1b0ea093395787209dcfaa25e92ecf34.png" alt="screenshot 2023-09-10 at 9.23.24 PM"></p><p>String table:</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_a7cd524b6ab0a666eef061f603af55e0.png" alt="screenshot 2023-09-10 at 9.28.42 PM"></p><h3 id="_3-3-vectors" tabindex="-1">3.3 Vectors <a class="header-anchor" href="#_3-3-vectors" aria-label="Permalink to &quot;3.3 Vectors&quot;">​</a></h3><p><strong>I LOVE VECTORS</strong></p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_f5a75a240019e40f04d6fba4ef9ecd37.png" alt="screenshot 2023-09-10 at 9.41.11 PM"></p><p><code>push_back()</code> makes a copy of the element.</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_0f5ee07c188fa6c7b1d0d41fdfc23c37.png" alt="screenshot 2023-09-10 at 10.00.44 PM"></p><p>This reminds me of Index Out of Bound in Java.</p><h3 id="_3-4-iterator" tabindex="-1">3.4 Iterator <a class="header-anchor" href="#_3-4-iterator" aria-label="Permalink to &quot;3.4 Iterator&quot;">​</a></h3><p>Iterators are representatives of generic thinkings.</p><ul><li><code>auto</code></li><li><code>++</code></li><li><code>*</code></li></ul><p>Any Pointer(maybe ref) overloading * and ++ would be a iterator.</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_eb3587f527c2c03d0a78cf8f03a46903.png" alt="screenshot 2023-09-10 at 10.39.04 PM"></p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_b73cd2d8398731d0791ae532758ae7d0.png" alt="screenshot 2023-09-10 at 10.33.03 PM"></p><h3 id="_3-5-arrays" tabindex="-1">3.5 Arrays <a class="header-anchor" href="#_3-5-arrays" aria-label="Permalink to &quot;3.5 Arrays&quot;">​</a></h3><p>The diff between arrays and vectors is that arrays have fixed size.</p><p>Thus, intuitively, arrays sometimes performs better than vectors.</p><h3 id="_3-6-multi-d-arrays" tabindex="-1">3.6 Multi-D arrays <a class="header-anchor" href="#_3-6-multi-d-arrays" aria-label="Permalink to &quot;3.6 Multi-D arrays&quot;">​</a></h3><p>I&#39;ve never seen of any code using multi-d arrays in c++.</p><p>It&#39;s because it&#39;s insufficient.</p><p>Like this explanation very much.</p><p><img src="https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_a2d1e36fe080ad631cf6ddf76ccbebea.png" alt=""></p>',47),n=[s];function o(c,p,l,d,h,m){return a(),t("div",null,n)}const _=e(i,[["render",o]]);export{u as __pageData,_ as default};

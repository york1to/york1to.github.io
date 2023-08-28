import{_ as s,c as a,o as n,a as e}from"./app.30bb539a.js";const d=JSON.parse('{"title":"Vitepress 使用个人 VPS 搭建博客避雷手册","description":"","frontmatter":{},"headers":[{"level":2,"title":"引子","slug":"引子","link":"#引子","children":[]},{"level":2,"title":"1 VPS 租赁，Cloudfare 域名解析","slug":"_1-vps-租赁-cloudfare-域名解析","link":"#_1-vps-租赁-cloudfare-域名解析","children":[{"level":3,"title":"1.1 cloudfare 域名解析","slug":"_1-1-cloudfare-域名解析","link":"#_1-1-cloudfare-域名解析","children":[]},{"level":3,"title":"1.2 nginx 代理","slug":"_1-2-nginx-代理","link":"#_1-2-nginx-代理","children":[]},{"level":3,"title":"1.3 https 证书","slug":"_1-3-https-证书","link":"#_1-3-https-证书","children":[]}]},{"level":2,"title":"2 Vitepress 安装与配置","slug":"_2-vitepress-安装与配置","link":"#_2-vitepress-安装与配置","children":[{"level":3,"title":"2.1 Vitepress 安装","slug":"_2-1-vitepress-安装","link":"#_2-1-vitepress-安装","children":[]},{"level":3,"title":"2.2 Vitepress 根据内容自动编写侧边栏 Index","slug":"_2-2-vitepress-根据内容自动编写侧边栏-index","link":"#_2-2-vitepress-根据内容自动编写侧边栏-index","children":[]},{"level":3,"title":"2.3 Vitepress Algolia 搜索","slug":"_2-3-vitepress-algolia-搜索","link":"#_2-3-vitepress-algolia-搜索","children":[]}]},{"level":2,"title":"3 mac 下 typora 配合调教","slug":"_3-mac-下-typora-配合调教","link":"#_3-mac-下-typora-配合调教","children":[{"level":3,"title":"3.1 typora 直接拖拽 MAC 截图的图片格式问题以及其解决方法：上传到 github","slug":"_3-1-typora-直接拖拽-mac-截图的图片格式问题以及其解决方法-上传到-github","link":"#_3-1-typora-直接拖拽-mac-截图的图片格式问题以及其解决方法-上传到-github","children":[]}]},{"level":2,"title":"4 git 服务器自动部署","slug":"_4-git-服务器自动部署","link":"#_4-git-服务器自动部署","children":[]}],"relativePath":"Vitepress_使用个人VPS搭建博客避雷手册.md","lastUpdated":1693248348000}'),l={name:"Vitepress_使用个人VPS搭建博客避雷手册.md"},p=e(`<h1 id="vitepress-使用个人-vps-搭建博客避雷手册" tabindex="-1">Vitepress 使用个人 VPS 搭建博客避雷手册 <a class="header-anchor" href="#vitepress-使用个人-vps-搭建博客避雷手册" aria-hidden="true">#</a></h1><p>[toc]</p><h2 id="引子" tabindex="-1">引子 <a class="header-anchor" href="#引子" aria-hidden="true">#</a></h2><p>静态博客发展到现在已经非常方便了，即使是我这种没有接触过任何前端的非计算机系学生，都能非常快捷地部署一个个人博客。即便如此，要满足我的需求，仍然存在需要调试的地方。经过两天的研究，有些调出来了有些没调出来，心里嘀咕着咱也不学这个差不多得了，所以写一篇手册防止自己忘掉。</p><h2 id="_1-vps-租赁-cloudfare-域名解析" tabindex="-1">1 VPS 租赁，Cloudfare 域名解析 <a class="header-anchor" href="#_1-vps-租赁-cloudfare-域名解析" aria-hidden="true">#</a></h2><p>为了给我的专线打掩护，租的是搬瓦工的 50 刀一年的服务器，之后润了也方便访问。</p><h3 id="_1-1-cloudfare-域名解析" tabindex="-1">1.1 cloudfare 域名解析 <a class="header-anchor" href="#_1-1-cloudfare-域名解析" aria-hidden="true">#</a></h3><p><a href="https://www.bandwagonhost.net/5986.html" target="_blank" rel="noreferrer">教程</a></p><h3 id="_1-2-nginx-代理" tabindex="-1">1.2 nginx 代理 <a class="header-anchor" href="#_1-2-nginx-代理" aria-hidden="true">#</a></h3><ol><li><p>安装</p><p>包管理器安装</p></li><li><p><a href="https://www.nginx.com/resources/wiki/start/topics/examples/full/" target="_blank" rel="noreferrer">配置文件</a></p></li><li><p>systemctl enable</p></li></ol><h3 id="_1-3-https-证书" tabindex="-1">1.3 https 证书 <a class="header-anchor" href="#_1-3-https-证书" aria-hidden="true">#</a></h3><p>使用 cloudfare 的免费证书<a href="https://www.cloudflare.com/zh-cn/learning/ssl/what-is-an-ssl-certificate/" target="_blank" rel="noreferrer">link</a></p><p><a href="https://seviche.cc/2022-06-12-cloudflare/" target="_blank" rel="noreferrer">教程</a></p><h2 id="_2-vitepress-安装与配置" tabindex="-1">2 Vitepress 安装与配置 <a class="header-anchor" href="#_2-vitepress-安装与配置" aria-hidden="true">#</a></h2><h3 id="_2-1-vitepress-安装" tabindex="-1">2.1 Vitepress 安装 <a class="header-anchor" href="#_2-1-vitepress-安装" aria-hidden="true">#</a></h3><p><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">官网</a>;</p><p>框架抄的<a href="https://arch.icekylin.online/" target="_blank" rel="noreferrer">Arch-guide</a>；写到 json 里面直接用 pnpm 安装；</p><p>用的 pnpm，更新用<code>pnpm i</code> , <a href="https://typicode.github.io/husky/guide.html" target="_blank" rel="noreferrer">husky</a>虽然有但是没用过.</p><h3 id="_2-2-vitepress-根据内容自动编写侧边栏-index" tabindex="-1">2.2 Vitepress 根据内容自动编写侧边栏 Index <a class="header-anchor" href="#_2-2-vitepress-根据内容自动编写侧边栏-index" aria-hidden="true">#</a></h3><p>不会任何 ts，所以用了 vitepress-plugin-auto-sidebar。</p><p>顶端导航手写的。</p><h3 id="_2-3-vitepress-algolia-搜索" tabindex="-1">2.3 Vitepress Algolia 搜索 <a class="header-anchor" href="#_2-3-vitepress-algolia-搜索" aria-hidden="true">#</a></h3><p>沙皮玩意儿，一坨屎，不想弄了，没有就没有吧。</p><h2 id="_3-mac-下-typora-配合调教" tabindex="-1">3 mac 下 typora 配合调教 <a class="header-anchor" href="#_3-mac-下-typora-配合调教" aria-hidden="true">#</a></h2><h3 id="_3-1-typora-直接拖拽-mac-截图的图片格式问题以及其解决方法-上传到-github" tabindex="-1">3.1 typora 直接拖拽 MAC 截图的图片格式问题以及其解决方法：上传到 github <a class="header-anchor" href="#_3-1-typora-直接拖拽-mac-截图的图片格式问题以及其解决方法-上传到-github" aria-hidden="true">#</a></h3><p>typora 有个非常不错的功能，用 mac 自带的截图直接拖到 typora 里面可以直接 Copy 一份到目标文件夹，并把路径转换为相对路径。以前都这么用过来的，结果发现 Mac 自带的时间格式里面有空格，自带的 html 解释器不能解释带空格的路径。解决方法是使用图床，于是采取了 picgo+github 图床的组合。</p><p><a href="https://picgo.github.io/PicGo-Doc/" target="_blank" rel="noreferrer">Picgo 文档</a></p><p>csdn 上的 picgo 的 config 他妈的乱写，浪费了我十分钟，这里找了另一篇<a href="https://www.jianshu.com/p/33e7da24ee36" target="_blank" rel="noreferrer">文章</a>，写一下步骤方便 cv：</p><ul><li>安装 npm 包管理器<code>brew install node</code></li><li>安装 picgo<code>npm install picgo -g</code></li><li>安装 github 插件<code>picgo install github-plus </code>理论上我不用 cdn 我也不需要这歌，不过无所谓了</li><li>安装重命名插件<code>picgo install rename-file</code> 重命名</li><li><code>vim ~/.picgo/config.json</code></li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">picBed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">uploader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">githubPlus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">current</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">githubPlus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">githubPlus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">branch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">customUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">origin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">github</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">repo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yorkitokang/trimof_image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">picgoPlugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">picgo-plugin-github-plus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">picgo-plugin-rename-file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">picgo-plugin-rename-file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">format</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{y}_{m}_{d}_{hash}_{origin}_{rand:6}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>注意：不要写//注释，不然他会报错</strong></p><p><code>customUrl</code>是留给 github 的中国 cdn 的，我没用成功，所以我留空</p><p><code>token</code>在<a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">这个地方</a>生成</p><p>typora 配置很简单，<a href="https://support.typora.io/Upload-Image" target="_blank" rel="noreferrer">官网</a>说的很明白。</p><p>最终实现效果，截图然后拖到 typora 里面，自动上传到 github 图床然后博客就能访问了，爽！</p><h2 id="_4-git-服务器自动部署" tabindex="-1">4 git 服务器自动部署 <a class="header-anchor" href="#_4-git-服务器自动部署" aria-hidden="true">#</a></h2>`,36),o=[p];function t(r,c,i,D,F,y){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{d as __pageData,u as default};

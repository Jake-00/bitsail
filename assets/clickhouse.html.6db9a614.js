import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,a as s,b as t,d as a,w as e,f as p,e as l,r as d}from"./app.c3ffa49a.js";const u={},r=s("h1",{id:"clickhouse-连接器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#clickhouse-连接器","aria-hidden":"true"},"#"),t(" ClickHouse 连接器")],-1),k=l(`<p><strong>BitSail</strong> ClickHouse 连接器可用于读取 ClickHouse 中的数据，主要支持如下功能：</p><ul><li>支持批式读取 ClickHouse 表</li><li>使用的 JDBC Driver 版本：0.3.2-patch11</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-clickhouse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clickhouse-读取" tabindex="-1"><a class="header-anchor" href="#clickhouse-读取" aria-hidden="true">#</a> ClickHouse 读取</h2><h3 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h3><p>支持如下基础数据类型：</p><ul><li>Int8</li><li>Int16</li><li>Int32</li><li>Int64</li><li>UInt8</li><li>UInt16</li><li>UInt32</li><li>UInt64</li><li>Float32</li><li>Float64</li><li>Decimal</li><li>Date</li><li>String</li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>读连接器参数在 <code>job.reader</code> 中配置，实际使用时请注意路径前缀。参数配置示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.clickhouse.source.ClickhouseSource&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;jdbc_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jdbc:clickhouse://127.0.0.1:8123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_ch_table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;split_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;split_config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;lower_bound\\&quot;: 0, \\&quot;upper_bound\\&quot;: 10000, \\&quot;split_num\\&quot;: 3}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sql_filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;( id % 2 == 0 )&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"><code>com.bytedance.bitsail.connector.clickhouse.source.ClickhouseSource</code></td><td style="text-align:left;">ClickHouse 读连接器类型</td></tr><tr><td style="text-align:left;">jdbc_url</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">ClickHouse 的 JDBC 连接地址</td></tr><tr><td style="text-align:left;">db_name</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">要读取的 ClickHouse 库</td></tr><tr><td style="text-align:left;">table_name</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">要读取的 ClickHouse 表</td></tr></tbody></table>`,13),g=l('<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">user_name</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">访问 ClickHouse 服务的用户名</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">上述用户的的密码</td></tr><tr><td style="text-align:left;">split_field</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">分批查询的字段，仅支持 Int8 - Int64 和 UInt8 - UInt 32 整数类型</td></tr><tr><td style="text-align:left;">split_config</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">按照 <code>split_field</code> 字段进行批次查询时的配置，包括初始值、最大值和查询的次数，<p></p> 如：<code>{&quot;lower_bound&quot;: 0, &quot;upper_bound&quot;: 10000, &quot;split_num&quot;: 3}</code></td></tr><tr><td style="text-align:left;">sql_filter</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">查询的过滤条件，比如 <code>( id % 2 == 0 )</code>，会拼接到查询 SQL 的 WHERE 子句中</td></tr><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">读取 ClickHouse 表的并发</td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>',3);function h(f,y){const n=d("RouterLink");return i(),c("div",null,[r,s("p",null,[t("上级文档："),a(n,{to:"/zh/documents/connectors/"},{default:e(()=>[t("连接器")]),_:1})]),k,p("AGGREGATE<br/>DUPLICATE"),g,s("p",null,[t("配置示例文档："),a(n,{to:"/zh/documents/connectors/clickhouse/clickhouse-example.html"},{default:e(()=>[t("ClickHouse 连接器示例")]),_:1})])])}const m=o(u,[["render",h],["__file","clickhouse.html.vue"]]);export{m as default};

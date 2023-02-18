import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as s,d as o,w as l,e as c,r as i}from"./app.adeb8394.js";const u={},r=n("h1",{id:"selectdb-连接器配置示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#selectdb-连接器配置示例","aria-hidden":"true"},"#"),s(" Selectdb 连接器配置示例")],-1),d=c(`<h2 id="测试用selectdb配置" tabindex="-1"><a class="header-anchor" href="#测试用selectdb配置" aria-hidden="true">#</a> 测试用Selectdb配置</h2><p>假设 Selectdb 集群配置如下:</p><ul><li>cluster: test_cluster</li><li>load_url: <code>&lt;selectdb url&gt;:&lt;http port&gt;</code></li><li>jdbc_url: <code>&lt;selectdb url&gt;:&lt;mysql port&gt;</code></li></ul><p>账户信息为:</p><ul><li>用户: <code>admin</code></li><li>密码: <code>password</code></li></ul><p>要写入的库表为:</p><ul><li>table_identifier: test_db.test_selectdb_table</li></ul><p>该表的建表语句为:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>test_db.test_selectdb_table<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span>             <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>bigint_type<span class="token punctuation">\`</span></span>    <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>string_type<span class="token punctuation">\`</span></span>    <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>double_type<span class="token punctuation">\`</span></span>    <span class="token keyword">double</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>decimal_type<span class="token punctuation">\`</span></span>   <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>date_type<span class="token punctuation">\`</span></span>      <span class="token keyword">date</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>partition_date<span class="token punctuation">\`</span></span> <span class="token keyword">date</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span>OLAP
<span class="token keyword">DUPLICATE</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">COMMENT</span> <span class="token string">&#39;OLAP&#39;</span>
<span class="token keyword">DISTRIBUTED</span> <span class="token keyword">BY</span> <span class="token keyword">HASH</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> BUCKETS <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selectdb-写连接器" tabindex="-1"><a class="header-anchor" href="#selectdb-写连接器" aria-hidden="true">#</a> Selectdb 写连接器</h2><p>可用下面的配置写入<code>test_db.test_selectdb_table</code>表:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.selectdb.sink.SelectdbSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;load_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;your selectdb http hosts&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;jdbc_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;your selectdb mysql hosts&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;selectdb cluster name&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;user name&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;password&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;selectdb table identifier, like: test_db.test_selectdb_table&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;varchar&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;decimal_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;partition_date&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function k(b,v){const a=i("RouterLink");return e(),p("div",null,[r,n("p",null,[s("父目录: "),o(a,{to:"/zh/documents/connectors/selectdb/selectdb.html"},{default:l(()=>[s("selectdb-connector")]),_:1})]),d])}const y=t(u,[["render",k],["__file","selectdb-example.html.vue"]]);export{y as default};

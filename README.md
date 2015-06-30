# <a href="http://aaronssky.duapp.com/aScrollSpy/">aScrollSpy</a>

<h2>Introduction</h2>
<p><strong>aScrollSpy</strong> is a plugin based on jQuery can make effects when scrolling to the position of the targets.</p>

<h2>Usage</h2>
<h3>Including file:</h3>
<div class='highlight highlight-html'>
  <pre>
    <code><<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../jQuery.min.js<span class="pl-pds">"</span></span>></<span class="pl-ent">script</span>></code>
    <code><<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../aScrollSpy.min.js<span class="pl-pds">"</span></span>></<span class="pl-ent">script</span>></code>
  </pre>
</div>
<h3>Html code</h3>
<pre>
    <img src="http://pic.chukou1.com/0/0_35df70.png">
  </pre>
<h3>JS code</h3>
<strong>Initialize Method:</strong>
<Br>
normal mode:
<pre>
    <code>
      var settings = {
          target: $(".J_Anchor"),
            ...
        };
      var spy = aScrollSpy(settings);
    </code>
  </pre>
  <br>
  jQuery mode:
  <pre>
    <code>
      var settings = {
           ...
        };
      $(".J_Anchor").aScrollSpy(settings);
    </code>
  </pre>
<h3>Settings Parameters</h3>
<p><strong>target</strong></p>
<pre><code>类型：Query对象 (若用jquery方式初始化，则不需设置)
默认值：$([])
设置滚动监听的目标，记录各个目标的位置</code>
</pre>

<strong>offset</strong>
<pre><code>类型：int（单位px）
默认值：0
调整监听目标的所在高度偏移值</code>
</pre>

<strong>formatter</strong>
<pre><code>类型：function
默认是保存各个target中 data-spyname 的值作为相应区域传递，即 { return $(this).data("spyname"); }
若自己定义,可return元素其它参数或属性</code>
</pre>

<strong>callback</strong>
<pre><code>类型：function
滚动条滚动到不同目标范围后触发的<strong>回调函数</strong>，可用以设置对应name的响应元素
该函数的第一个参数是目标target的name，对应formatter中return的值
第二个参数是当前目标target的JQ对象</code>
</pre>


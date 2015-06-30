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
            offset: -50,
            formatter: function() {
                //默认是保存target中 data-spyname 的值作为相应区域传递，也可以自己定义
                return $(this).data("spyname");
            },
            callback: function(spyName, currentObj) { }
        };
      var spy = aScrollSpy(settings);
    </code>
  </pre>
  <br>
  jQuery mode:
  <pre>
    <code>
      var settings = {
            offset: -50,
            formatter: function() {
                //默认是保存target中 data-spyname 的值作为相应区域传递，也可以自己定义
                return $(this).data("spyname");
            },
            callback: function(spyName, currentObj) { }
        };
      $(".J_Anchor").aScrollSpy(settings);
    </code>
  </pre>

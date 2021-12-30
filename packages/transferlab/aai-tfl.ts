<TeXmacs|2.1>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|aai-tfl|0.8>

    <\src-purpose>
      A tufte-like style for appliedAI's TransferLab
    </src-purpose>

    <src-copyright|2021|Miguel de Benito Delgado>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <use-package|acmart|smart-ref|preview-ref>

  <\active*>
    <\src-comment>
      Basic configuration variables and common defaults

      All pages have 25mm margins at both sides. Odd pages have an additional
      75mm to the right and even pages to the left. This extra space is used
      by marginal notes and figures.
    </src-comment>
  </active*>

  <assign|transferlab-logo|<macro|width|<image|<find-file|$TEXMACS_HOME_PATH/plugins/transferlab/packages/transferlab/transferlab.eps>|<arg|width>|||>>>

  <assign|appliedai-logo|<macro|width|<image|<find-file|$TEXMACS_HOME_PATH/plugins/transferlab/packages/transferlab/appliedai-pantone-positive-uncoated.pdf>|<arg|width>|||>>>

  \;

  <assign|aai-color|#00747b>

  <assign|aai-color-light|#1c9b90>

  <assign|locus-color|<value|aai-color>>

  <assign|visited-color|<value|aai-color>>

  \;

  <assign|info-flag|detailed>

  <assign|page-screen-margin|false>

  <assign|save-aux|false>

  <assign|page-medium|paper>

  <assign|page-type|a4>

  <assign|page-width-margin|true>

  <assign|par-width|110mm>

  <assign|page-odd-shift|-25mm>

  <assign|page-even-shift|25mm>

  <assign|page-top|30mm>

  <assign|page-bot|30mm>

  <assign|page-head-sep|15mm>

  <assign|page-foot-sep|18mm>

  <assign|marginal-note-sep|12mm>

  <assign|marginal-note-width|48mm>

  <assign|marginal-figure-width|56mm>

  <assign|figure-top-sep|1.5bls>

  <assign|figure-bot-sep|1.7bls>

  <assign|marginal-par-sep|0.11fn>

  <assign|par-par-sep|0.5fn>

  <assign|page-odd-footer|<move|<transferlab-logo|120pt>|380pt|>>

  <assign|font-base-size|11>

  <assign|math-font|math-dejavu>

  <assign|very-small|<macro|body|<with|font-size|0.78|<arg|body>>>>

  <\active*>
    <\src-comment>
      Abstracts, tl;drs and other markup
    </src-comment>
  </active*>

  <assign|render-abstract|<\macro|body>
    <\surround|<no-indent>|<vspace|2em>>
      <\small>
        <em|<arg|body>>
      </small>
    </surround>
  </macro>>

  <assign|tldr|<macro|body|<\with|ornament-shape|classic|ornament-vpadding|2spc|ornament-hpadding|2spc|ornament-border|0.5ln|ornament-sunny-color|<value|aai-color>|ornament-shadow-color|<value|aai-color>>
    <\ornamented>
      <surround|<strong|tl;dr: >||<arg|body>>
    </ornamented>
  </with>>>

  -- FIXME: color is not applied to the border if this is used inside a
  marginal note, so we use the ornament variant instead. But that causes the
  vertical placement not to respond.

  <assign|tldr-table|<macro|body|<with|color|<value|aai-color>|<block|<tformat|<cwith|1|1|1|1|cell-tborder|0.5ln>|<cwith|1|1|1|1|cell-bborder|0.5ln>|<cwith|1|1|1|1|cell-lborder|0.5ln>|<cwith|1|1|1|1|cell-rborder|0.5ln>|<twith|table-width|<value|marginal-figure-width>>|<twith|table-hmode|exact>|<cwith|1|1|1|1|cell-hyphen|t>|<table|<row|<\cell>
    <with|color|black|<strong|tl;dr: ><arg|body>>
  </cell>>>>>>>>

  -- FIXME: this will not display if inlined! (but for a while it did (??))

  <assign|marginal-tldr|<\macro|body>
    <\with|marginal-note-flag-text|tl;dr|marginal-note-flag-color|orange>
      <\marginal-note*|normal|c>
        <\with|par-mode|justify>
          <tldr|<arg|body>>
        </with>
      </marginal-note*>
    </with>
  </macro>>

  <assign|dfn|<macro|body|<strong|<arg|body>>>>

  -- Omit paragraphs from the TOC

  <assign|notoc|<macro|body|<flag|no toc|pastel
  blue><with-toc|none|<arg|body>>>>

  <assign|paragraph|<macro|title|<notoc|<assign|paragraph-numbered|<compound|paragraph-display-numbers>><assign|paragraph-prefix|<macro|<compound|the-paragraph>.>><compound|next-paragraph><compound|paragraph-clean><compound|paragraph-header|<arg|title>><compound|paragraph-toc|<arg|title>><if|<value|paragraph-numbered>|<compound|paragraph-numbered-title|<arg|title>>|<compound|paragraph-unnumbered-title|<arg|title>>>>>>

  <assign|quotation|<\macro|body>
    <\padded>
      <\indent-both|<value|quote-left-indentation>|<value|quote-right-indentation>>
        <surround|<yes-indent>||<em|<arg|body>>>
      </indent-both>
    </padded>
  </macro>>

  <\active*>
    <\src-comment>
      Numbered marginal notes
    </src-comment>
  </active*>

  <assign|marginal-note-total|<plus|<value|marginal-note-width>|<value|marginal-note-sep>>>

  <new-counter|marginal-note> -- Probably should use add-to-counter-group
  std-env

  <assign|display-marginal-note|<macro|nr|<small|<em|<rsup|<arg|nr>>>>>> --
  An unfortunate name...

  <assign|marginal-note|<macro|hpos|vpos|body|<surround|<inc-marginal-note><the-marginal-note><set-binding|<marginal-note-nr>>||<with|dummy1|<value|marginal-note-width>|dummy2|<value|marginal-note-sep>|par-sep|<value|marginal-par-sep>|<compound|<merge|marginal-|<arg|hpos>|-note>|<arg|vpos>|<the-marginal-note>
  <very-small|<arg|body>>|<arg|hpos>>>>>>

  <assign|marginal-note*|<macro|hpos|vpos|body|<with|dummy1|<value|marginal-note-width>|dummy2|<value|marginal-note-sep>|par-sep|<value|marginal-par-sep>|<compound|<merge|marginal-|<arg|hpos>|-note>|<arg|vpos>|<very-small|<arg|body>>|<arg|hpos>>>>>

  <drd-props|marginal-note*|arity|3|accessible|none>

  <\active*>
    <\src-comment>
      Redefinitions of standard markup to use the additional margin
    </src-comment>
  </active*>

  <assign|render-big-figure|<\macro|type|name|fig|cap>
    <surround|<vspace*|<value|figure-top-sep>><with|marginal-note-flag||<marginal-note*|normal|c|<small|<html-div-class|caption|<surround|<figure-name|<arg|name><figure-sep>><list-caption|<arg|type>|<arg|cap>>||<arg|cap>>>>>>|<vspace|<value|figure-bot-sep>>|<center|<arg|fig>>>
  </macro>>

  <assign|doc-title|<macro|x|<\surround|<with|marginal-note-flag||<marginal-note*|normal|b|<shift|<appliedai-logo|200pt>|-7.5mm|10mm>>>|<vspace|0.5fn>>
    <doc-title-block|<font-magnify|1.412|<with|font-family|ss|font-series|bold|<arg|x>>>>
  </surround>>>

  <assign|dfn*|<macro|body|<dfn|<arg|body>><with|marginal-note-flag|<flag|dfn|green>|<marginal-note*|normal|c|<em|<arg|body>>>>>>

  -- Tweaks to TOC, use with marginal-note*. To do: marginal-toc macro (won't
  work for some reason)

  <assign|table-of-contents-text|<macro|<htab|10mm><with|font-size|1.1|<localize|Contents>><htab|5mm><vspace|0.5fn>>>

  <assign|toc-strong-1|<macro|left|right|<with|font-series|bold|math-font-series|bold|font-size|1.19|<arg|left>><toc-dots><no-break><arg|right><vspace|0.4fn>>>

  <assign|toc-strong-2|<macro|left|right|<vspace*|0.25fn><with|font-series|bold|math-font-series|bold|<arg|left>><toc-dots><no-break><arg|right><vspace|0.25fn>>>

  <\active*>
    <\src-comment>
      Wide figures taking all width up to the outer margins
    </src-comment>
  </active*>

  <assign|wide-figure-width|<plus|<value|par-width>|<value|marginal-note-sep>|<value|marginal-note-width>>>

  <assign|wide-figure-inner|<\macro|body|caption|lead>
    <\tabular>
      <tformat|<cwith|2|2|1|1|cell-tsep|0>|<cwith|2|2|1|1|cell-bsep|0>|<cwith|2|2|1|1|cell-hpart|0>|<cwith|2|2|1|1|cell-vmode|exact>|<cwith|2|2|1|1|cell-height|0.8em>|<cwith|3|3|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-halign|c>|<twith|table-lsep|0>|<twith|table-rsep|0>|<twith|table-tsep|<value|figure-top-sep>>|<twith|table-bsep|<value|figure-bot-sep>>|<twith|table-width|<value|wide-figure-width>>|<twith|table-hmode|exact>|<table|<row|<cell|<arg|body>>>|<row|<cell|>>|<row|<\cell>
        <html-div-class|caption|<surround|<figure-name|<figure-text><arg|lead><figure-sep>><list-caption|big-figure|<arg|caption>>||<small|<arg|caption>>>>
      </cell>>>>
    </tabular>
  </macro>>

  <assign|wide-figure-even|<\macro|body|caption|lead>
    <move|<wide-figure-inner|<arg|body>|<arg|caption>|<arg|lead>>|<minus|<value|marginal-note-total>>|>
  </macro>>

  <assign|wide-figure-odd|<\macro|body|caption|lead>
    <wide-figure-inner|<arg|body>|<arg|caption>|<arg|lead>>
  </macro>>

  <assign|wide-figure|<\macro|body|caption>
    <\surround|<no-indent><inc-figure>|>
      <specific|even|<wide-figure-even|<arg|body>|<arg|caption>|
      <the-figure>>><specific|odd|<wide-figure-odd|<arg|body>|<arg|caption>|
      <the-figure>>><vphantom|<wide-figure-inner|<arg|body>|<arg|caption>|>>
    </surround>
  </macro>>

  <assign|wide-figure*|<\macro|body|caption>
    <\surround|<no-indent>|>
      <specific|even|<wide-figure-even|<arg|body>|<arg|caption>|>><specific|odd|<wide-figure-odd|<arg|body>|<arg|caption>|>><vphantom|<wide-figure-inner|<arg|body>|<arg|caption>|>>
    </surround>
  </macro>>

  <\active*>
    <\src-comment>
      Marginal figures
    </src-comment>
  </active*>

  <assign|render-marginal-figure|<macro|type|name|fig|cap|<tabular*|<tformat|<cwith|1|-1|1|-1|cell-lsep|0spc>|<cwith|1|-1|1|-1|cell-rsep|0spc>|<cwith|2|2|1|1|cell-height|0.5fn>|<twith|table-valign|B>|<cwith|3|3|1|1|cell-hyphen|t>|<twith|table-width|<value|marginal-figure-width>>|<twith|table-hmode|min>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<table|<row|<cell|<arg|fig>>>|<row|<cell|>>|<row|<\cell>
    <\html-div-class|caption>
      <small|<\surround|<figure-name|<arg|name><figure-sep>><list-caption|<arg|type>|<arg|cap>>|>
        <arg|cap>
      </surround>>
    </html-div-class>
  </cell>>>>>>>

  <assign|marginal-figure|<macro|vpos|body|caption|<surround|<compound|next-figure>||<with|marginal-note-flag|<flag|<merge|Fig
  |<compound|the-figure>>|dark green>|<marginal-note*|normal|<arg|vpos>|<render-marginal-figure|figure|<compound|figure-text>
  <compound|the-figure>|<arg|body>|<surround|<set-binding|<compound|the-figure>>||<arg|caption>>>>>>>>

  <assign|marginal-figure*|<macro|vpos|body|caption|<with|marginal-note-flag-text|figure|<marginal-note*|normal|<arg|vpos>|<with|figure-sep||<render-marginal-figure||<compound|figure-text>.
  |<arg|body>|<arg|caption>>>>>>>
</body>

<\initial>
  <\collection>
    <associate|global-author|Miguel de Benito Delgado>
    <associate|global-subject|>
    <associate|global-title|Macros for the TransferLab>
    <associate|page-medium|papyrus>
  </collection>
</initial>
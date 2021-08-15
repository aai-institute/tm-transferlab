<TeXmacs|2.1>

<style|tmdoc>

<\body>
  <tmdoc-title|The TransferLab TeXmacs style>

  This plugin contains a <em|very> simple Tufte-like TeXmacs package in use
  at <hlink|appliedAI's Transferlab|https://transferlab.appliedai.de>.

  <section|Installation>

  Clone this repository into <shell|$TEXMACS_HOME_PATH/plugins> as
  <tt|transferlab>. For <name|Linux> and <name|MacOS> this path is typically
  <shell|~/.TeXmacs/plugins>:

  <\shell-code>
    git clone https://github.com/texmacs/transferlab.git
    ~/.TeXmacs/plugins/transferlab
  </shell-code>

  \;

  For <name|Windows>, the path (usually?) is

  <\shell-code>
    \\Users\\YourUser\\AppData\\Roaming\\TeXmacs\\plugins
  </shell-code>

  <section|Usage>

  After installation, use <menu|Document|Style|Add package> to add the
  package <menu|Transferlab|aai-tfl> to your document. There is also a new
  menu item in <menu|Insert|Notes|Unnumbered note>.

  <\warning*>
    Cursor navigation is broken (but usable), see below.
  </warning*>

  <section|Features>

  <\itemize-dot>
    <item>A style with large alternating margins intended for usage with
    marginal notes. The page size is hardcoded to A4. All pages have
    <src-length|25mm> margins at both side. Odd pages have an additional
    <src-length|75mm> to the right and even pages to the left. This extra
    space is used by marginal notes.

    <item>Macros and accompanying scheme code for numbered marginal notes.
    When using the package, <markup|marginal-note> is numbered and
    <markup|marginal-note*> unnumbered. They are variants from each other so
    it is possible to switch easily.

    <item>Macros for figures completely contained in the margin:
    <markup|marginal-figure> and <markup|marginal-figure*>.

    <item>Placement of captions in the margin for the standard
    <markup|big-figure> and <markup|big-figure*>.

    <item>A <markup|wide-figure> macro extending beyond the body of the text
    to occupy the full width of the page, minus the exterior margins, and an
    unnumbered <markup|wide-figure*> variant.

    <item>Custom TOC title and spacing for usage inside a
    <markup|marginal-note*>. Use with <explain-macro|marginal-note*|normal|c|<explain-macro|table-of-contents|toc|>>
    placed inside the abstract (if you do, you will have to surround it by an
    <markup|em> tag to avoid the TOC from displaying emphasized like the
    abstract).

    <item>A <markup|notoc> macro to hide content from the table of contents.
    Use e.g. for \ sub-subsections to avoid too many levels in the marginal
    TOC.
  </itemize-dot>

  <section|Known issues>

  <\itemize-dot>
    <item>Cursor navigation is mostly broken for the new markup. It is
    necessary to deactivate the tags by positioning the cursor to their right
    and pressing <key|backspace>.

    <item><markup|wide-figure> uses an ugly hack with the undocumented
    <markup|vphantom> and <explain-macro|specific|odd|>,
    <explain-macro|specific|even|> in order to move the figure to the left in
    even pages to center it absolutely in the document.

    I haven't found a way of using <markup|move> with different magnitudes
    depending either on the page number (which is not available during
    typesetting) or on the distance to the side of the page. Recall that,
    during the evaluation of <src-arg|delta-x> and <src-arg|delta-y> in
    <explain-macro|move|content|delta-x|delta-y>, the box lengths
    <verbatim|w>, <verbatim|h>, <verbatim|l>, <verbatim|r>, <verbatim|b> and
    <verbatim|t> of <src-arg|content> are defined. So one could think of
    using <explain-macro|if|<explain-macro|greater|<src-var|outer-margin>|1l>|<explain-macro|move|wide
    figure here||some distance to the left>>, but it seems like the box
    lengths are not available inside the conditional.

    <item>Probably more. Issues and PRs in the
    <hlink|GitHub|https://github.com/appliedAI-Initiative/tm-transferlab>
    repository.
  </itemize-dot>

  <section|License>

  Use at your own risk.

  \;
</body>

<\initial>
  <\collection>
    <associate|markdown-auto-export|../README.md>
    <associate|page-medium|papyrus>
  </collection>
</initial>
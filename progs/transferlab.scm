;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; MODULE      : transferlab.scm
;; DESCRIPTION : Routines for the TransferLab style
;; COPYRIGHT   : (C) Miguel de Benito Delgado
;;
;; This software falls under the GNU general public license version 3 or later.
;; It comes WITHOUT ANY WARRANTY WHATSOEVER. For details, see the file LICENSE
;; in the root directory or <http://www.gnu.org/licenses/gpl-3.0.html>.
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(texmacs-module (transferlab)
  (:use (dynamic fold-menu)))

(define-group marginal-note-tag
  marginal-note marginal-note*)

(define-group numbered-tag
  marginal-note)

(define-group big-figure-tag
  wide-figure)

(define-group small-figure-tag
  marginal-figure)

(tm-define (marginal-note-context? t)
  (tree-in? t '(marginal-note marginal-note*)))

(define (in-marginal-note?)
  (or (tree-innermost 'marginal-note #t) (tree-innermost 'marginal-note* #t)))

(tm-define (test-marginal-note-hpos? hp)
  (and-with t (in-marginal-note?)
    (tm-equal? (tree-ref t 0) hp)))

(tm-define (set-marginal-note-hpos hp)
  (:synopsis "Set the horizontal position of the marginal note to @hp.")
  (:check-mark "v" test-marginal-note-hpos?)
  (and-with t (in-marginal-note?)
    (tree-set t 0 hp)))

(tm-define (test-marginal-note-valign? va)
  (and-with t (in-marginal-note?)
    (tm-equal? (tree-ref t 1) va)))

(tm-define (set-marginal-note-valign va)
  (:synopsis "Set the vertical alignment of the marginal note to @va.")
  (:check-mark "v" test-marginal-note-valign?)
  (and-with t (in-marginal-note?)
    (tree-set t 1 va)))

;; Use this to update a document when using this style in order to have
;; old notes as unnumbered.
;; (replace-tags 'marginal-note 'marginal-note*)
(tm-define (replace-tags what by)
  (tree-replace (buffer-tree) what by))

(tm-define (make-marginal-figure)
  (:synopsis "Insert a numbered marginal figure.")
  (wrap-selection-small
    (insert-go-to `(inactive (marginal-figure "c" "" "")) '(0 1 0))))

(tm-define (slide-insert-title t)
  (:require (in? "tfl-beamer" (get-style-list)))
  (and-with u (slide-get-document t)
    (tree-insert u 0 '((tit "" "")))
    (tree-go-to u 0 0 0)))

(tm-define (make-wide-figure)
  (:synopsis "Insert a numbered wide figure.")
  (wrap-selection-small
    (insert-go-to `(document "" (inactive (wide-figure "" "")) "") '(1 0 0 0))))

(menu-bind tfl-figures-menu
  (when (and (has-style-package? "aai-tfl")
             (not (or (inside? 'float) (inside? 'footnote)
                      (inside? 'marginal-note) (inside? 'marginal-note*)))
             (in-main-flow?)
             (not (selection-active-non-small?)))
    ("Marginal figure" (make-marginal-figure))
    ("Wide figure" (make-wide-figure))))


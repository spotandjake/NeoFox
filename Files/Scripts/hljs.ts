//@ts-nocheck

// Core import
import hljs from 'highlight.js/lib/core';
// Languages import
import actionscript from 'highlight.js/lib/languages/actionscript';
import ada from 'highlight.js/lib/languages/ada';
import angelscript from 'highlight.js/lib/languages/angelscript';
import apache from 'highlight.js/lib/languages/apache';
import applescript from 'highlight.js/lib/languages/applescript';
import arcade from 'highlight.js/lib/languages/arcade';
import arduino from 'highlight.js/lib/languages/arduino';        
import armasm from 'highlight.js/lib/languages/armasm';
import xml from 'highlight.js/lib/languages/xml';
import asciidoc from 'highlight.js/lib/languages/asciidoc';
import aspectj from 'highlight.js/lib/languages/aspectj';
import autohotkey from 'highlight.js/lib/languages/autohotkey';
import avrasm from 'highlight.js/lib/languages/avrasm';
import awk from 'highlight.js/lib/languages/awk';
import axapta from 'highlight.js/lib/languages/axapta';
import bash from 'highlight.js/lib/languages/bash';
import basic from 'highlight.js/lib/languages/basic';
import bnf from 'highlight.js/lib/languages/bnf';
import brainfuck from 'highlight.js/lib/languages/brainfuck';
import c from 'highlight.js/lib/languages/c';
import cal from 'highlight.js/lib/languages/cal';
import capnproto from 'highlight.js/lib/languages/capnproto';
import ceylon from 'highlight.js/lib/languages/ceylon';
import clean from 'highlight.js/lib/languages/clean';
import clojure from 'highlight.js/lib/languages/clojure';
import cmake from 'highlight.js/lib/languages/cmake';
import coffeescript from 'highlight.js/lib/languages/coffeescript';
import coq from 'highlight.js/lib/languages/coq';
import cos from 'highlight.js/lib/languages/cos';
import cpp from 'highlight.js/lib/languages/cpp';
import crmsh from 'highlight.js/lib/languages/crmsh';
import crystal from 'highlight.js/lib/languages/crystal';
import csharp from 'highlight.js/lib/languages/csharp';
import csp from 'highlight.js/lib/languages/csp';
import css from 'highlight.js/lib/languages/css';
import d from 'highlight.js/lib/languages/d';
import markdown from 'highlight.js/lib/languages/markdown';
import dart from 'highlight.js/lib/languages/dart';
import delphi from 'highlight.js/lib/languages/delphi';
import diff from 'highlight.js/lib/languages/diff';
import django from 'highlight.js/lib/languages/django';
import dns from 'highlight.js/lib/languages/dns';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import dos from 'highlight.js/lib/languages/dos';
import dsconfig from 'highlight.js/lib/languages/dsconfig';
import dts from 'highlight.js/lib/languages/dts';
import dust from 'highlight.js/lib/languages/dust';
import ebnf from 'highlight.js/lib/languages/ebnf';
import elixir from 'highlight.js/lib/languages/elixir';
import elm from 'highlight.js/lib/languages/elm';
import ruby from 'highlight.js/lib/languages/ruby';
import erb from 'highlight.js/lib/languages/erb';
import erlang from 'highlight.js/lib/languages/erlang';
import excel from 'highlight.js/lib/languages/excel';
import fix from 'highlight.js/lib/languages/fix';
import flix from 'highlight.js/lib/languages/flix';
import fortran from 'highlight.js/lib/languages/fortran';
import fsharp from 'highlight.js/lib/languages/fsharp';
import gams from 'highlight.js/lib/languages/gams';
import gcode from 'highlight.js/lib/languages/gcode';
import gherkin from 'highlight.js/lib/languages/gherkin';
import glsl from 'highlight.js/lib/languages/glsl';
import go from 'highlight.js/lib/languages/go';
import golo from 'highlight.js/lib/languages/golo';
import gradle from 'highlight.js/lib/languages/gradle';
import groovy from 'highlight.js/lib/languages/groovy';
import haml from 'highlight.js/lib/languages/haml';
import handlebars from 'highlight.js/lib/languages/handlebars';
import haskell from 'highlight.js/lib/languages/haskell';
import haxe from 'highlight.js/lib/languages/haxe';
import hsp from 'highlight.js/lib/languages/hsp';
import http from 'highlight.js/lib/languages/http';
import hy from 'highlight.js/lib/languages/hy';
import inform7 from 'highlight.js/lib/languages/inform7';
import ini from 'highlight.js/lib/languages/ini';
import irpf90 from 'highlight.js/lib/languages/irpf90';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import jboss_cli from 'highlight.js/lib/languages/jboss-cli';
import json from 'highlight.js/lib/languages/json';
import julia from 'highlight.js/lib/languages/julia';
import kotlin from 'highlight.js/lib/languages/kotlin';
import lasso from 'highlight.js/lib/languages/lasso';
import latex from 'highlight.js/lib/languages/latex';
import ldif from 'highlight.js/lib/languages/ldif';
import leaf from 'highlight.js/lib/languages/leaf';
import less from 'highlight.js/lib/languages/less';
import lisp from 'highlight.js/lib/languages/lisp';
import livecodeserver from 'highlight.js/lib/languages/livecodeserver';
import livescript from 'highlight.js/lib/languages/livescript';
import llvm from 'highlight.js/lib/languages/llvm';
import lsl from 'highlight.js/lib/languages/lsl';
import lua from 'highlight.js/lib/languages/lua';
import makefile from 'highlight.js/lib/languages/makefile';
import matlab from 'highlight.js/lib/languages/matlab';
import mel from 'highlight.js/lib/languages/mel';
import mercury from 'highlight.js/lib/languages/mercury';
import mipsasm from 'highlight.js/lib/languages/mipsasm';
import mizar from 'highlight.js/lib/languages/mizar';
import perl from 'highlight.js/lib/languages/perl';
import mojolicious from 'highlight.js/lib/languages/mojolicious';
import monkey from 'highlight.js/lib/languages/monkey';
import moonscript from 'highlight.js/lib/languages/moonscript';
import n1ql from 'highlight.js/lib/languages/n1ql';
import nginx from 'highlight.js/lib/languages/nginx';
import nim from 'highlight.js/lib/languages/nim';
import nix from 'highlight.js/lib/languages/nix';
import nsis from 'highlight.js/lib/languages/nsis';
import objectivec from 'highlight.js/lib/languages/objectivec';
import ocaml from 'highlight.js/lib/languages/ocaml';
import openscad from 'highlight.js/lib/languages/openscad';
import oxygene from 'highlight.js/lib/languages/oxygene';
import parser3 from 'highlight.js/lib/languages/parser3';
import pf from 'highlight.js/lib/languages/pf';
import pgsql from 'highlight.js/lib/languages/pgsql';
import php from 'highlight.js/lib/languages/php';
import php_template from 'highlight.js/lib/languages/php-template';
import pony from 'highlight.js/lib/languages/pony';
import powershell from 'highlight.js/lib/languages/powershell';
import processing from 'highlight.js/lib/languages/processing';
import profile from 'highlight.js/lib/languages/profile';
import prolog from 'highlight.js/lib/languages/prolog';
import properties from 'highlight.js/lib/languages/properties';
import protobuf from 'highlight.js/lib/languages/protobuf';
import puppet from 'highlight.js/lib/languages/puppet';
import purebasic from 'highlight.js/lib/languages/purebasic';
import python from 'highlight.js/lib/languages/python';
import q from 'highlight.js/lib/languages/q';
import qml from 'highlight.js/lib/languages/qml';
import r from 'highlight.js/lib/languages/r';
import reasonml from 'highlight.js/lib/languages/reasonml';
import rib from 'highlight.js/lib/languages/rib';
import roboconf from 'highlight.js/lib/languages/roboconf';
import routeros from 'highlight.js/lib/languages/routeros';
import rsl from 'highlight.js/lib/languages/rsl';
import ruleslanguage from 'highlight.js/lib/languages/ruleslanguage';
import rust from 'highlight.js/lib/languages/rust';
import sas from 'highlight.js/lib/languages/sas';
import scala from 'highlight.js/lib/languages/scala';
import scheme from 'highlight.js/lib/languages/scheme';
import scilab from 'highlight.js/lib/languages/scilab';
import scss from 'highlight.js/lib/languages/scss';
import shell from 'highlight.js/lib/languages/shell';
import smali from 'highlight.js/lib/languages/smali';
import smalltalk from 'highlight.js/lib/languages/smalltalk';
import sml from 'highlight.js/lib/languages/sml';
import sql from 'highlight.js/lib/languages/sql';
import stan from 'highlight.js/lib/languages/stan';
import stata from 'highlight.js/lib/languages/stata';
import step21 from 'highlight.js/lib/languages/step21';
import stylus from 'highlight.js/lib/languages/stylus';
import subunit from 'highlight.js/lib/languages/subunit';
import swift from 'highlight.js/lib/languages/swift';
import taggerscript from 'highlight.js/lib/languages/taggerscript';
import yaml from 'highlight.js/lib/languages/yaml';
import tap from 'highlight.js/lib/languages/tap';
import tcl from 'highlight.js/lib/languages/tcl';
import thrift from 'highlight.js/lib/languages/thrift';
import tp from 'highlight.js/lib/languages/tp';
import twig from 'highlight.js/lib/languages/twig';
import typescript from 'highlight.js/lib/languages/typescript';
import vala from 'highlight.js/lib/languages/vala';
import vbnet from 'highlight.js/lib/languages/vbnet';
import vbscript from 'highlight.js/lib/languages/vbscript';
import vbscript_html from 'highlight.js/lib/languages/vbscript-html';
import verilog from 'highlight.js/lib/languages/verilog';
import vhdl from 'highlight.js/lib/languages/vhdl';
import vim from 'highlight.js/lib/languages/vim';
import x86asm from 'highlight.js/lib/languages/x86asm';
import xl from 'highlight.js/lib/languages/xl';
import xquery from 'highlight.js/lib/languages/xquery';
import zephir from 'highlight.js/lib/languages/zephir';

let langs: Map<string, any> = new Map([
  [ 'actionscript', actionscript ],
  [ 'ada', ada ],
  [ 'angelscript', angelscript ],
  [ 'apache', apache ],
  [ 'applescript', applescript ],
  [ 'arcade', arcade ],
  [ 'arduino', arduino ],
  [ 'armasm', armasm ],
  [ 'xml', xml ],
  [ 'asciidoc', asciidoc ],
  [ 'aspectj', aspectj ],
  [ 'autohotkey', autohotkey ],
  [ 'avrasm', avrasm ],
  [ 'awk', awk ],
  [ 'axapta', axapta ],
  [ 'bash', bash ],
  [ 'basic', basic ],
  [ 'bnf', bnf ],
  [ 'brainfuck', brainfuck ],
  [ 'c', c ],
  [ 'cal', cal ],
  [ 'capnproto', capnproto ],
  [ 'ceylon', ceylon ],
  [ 'clean', clean ],
  [ 'clojure', clojure ],
  [ 'cmake', cmake ],
  [ 'coffeescript', coffeescript ],
  [ 'coq', coq ],
  [ 'cos', cos ],
  [ 'cpp', cpp ],
  [ 'crmsh', crmsh ],
  [ 'crystal', crystal ],
  [ 'csharp', csharp ],
  [ 'csp', csp ],
  [ 'css', css ],
  [ 'd', d ],
  [ 'markdown', markdown ],
  [ 'dart', dart ],
  [ 'delphi', delphi ],
  [ 'diff', diff ],
  [ 'django', django ],
  [ 'dns', dns ],
  [ 'dockerfile', dockerfile ],
  [ 'dos', dos ],
  [ 'dsconfig', dsconfig ],
  [ 'dts', dts ],
  [ 'dust', dust ],
  [ 'ebnf', ebnf ],
  [ 'elixir', elixir ],
  [ 'elm', elm ],
  [ 'ruby', ruby ],
  [ 'erb', erb ],
  [ 'erlang', erlang ],
  [ 'excel', excel ],
  [ 'fix', fix ],
  [ 'flix', flix ],
  [ 'fortran', fortran ],
  [ 'fsharp', fsharp ],
  [ 'gams', gams ],
  [ 'gcode', gcode ],
  [ 'gherkin', gherkin ],
  [ 'glsl', glsl ],
  [ 'go', go ],
  [ 'golo', golo ],
  [ 'gradle', gradle ],
  [ 'groovy', groovy ],
  [ 'haml', haml ],
  [ 'handlebars', handlebars ],
  [ 'haskell', haskell ],
  [ 'haxe', haxe ],
  [ 'hsp', hsp ],
  [ 'http', http ],
  [ 'hy', hy ],
  [ 'inform7', inform7 ],
  [ 'ini', ini ],
  [ 'irpf90', irpf90 ],
  [ 'java', java ],
  [ 'javascript', javascript ],
  [ 'jboss-cli', jboss_cli ],
  [ 'json', json ],
  [ 'julia', julia ],
  [ 'kotlin', kotlin ],
  [ 'lasso', lasso ],
  [ 'latex', latex ],
  [ 'ldif', ldif ],
  [ 'leaf', leaf ],
  [ 'less', less ],
  [ 'lisp', lisp ],
  [ 'livecodeserver', livecodeserver ],
  [ 'livescript', livescript ],
  [ 'llvm', llvm ],
  [ 'lsl', lsl ],
  [ 'lua', lua ], [ 'makefile', makefile ], [ 'matlab', matlab ],
  [ 'mel', mel ], [ 'mercury', mercury ], [ 'mipsasm', mipsasm ],
  [ 'mizar', mizar ], [ 'perl', perl ], [ 'mojolicious', mojolicious ],
  [ 'monkey', monkey ], [ 'moonscript', moonscript ], [ 'n1ql', n1ql ],
  [ 'nginx', nginx ], [ 'nim', nim ], [ 'nix', nix ],
  [ 'nsis', nsis ], [ 'objectivec', objectivec ],
  [ 'ocaml', ocaml ], [ 'openscad', openscad ],
  [ 'oxygene', oxygene ], [ 'parser3', parser3 ],
  [ 'pf', pf ], [ 'pgsql', pgsql ], [ 'php', php ],
  [ 'php-template', php_template ], [ 'pony', pony ], [ 'powershell', powershell ],
  [ 'processing', processing ], [ 'profile', profile ], [ 'prolog', prolog ],
  [ 'properties', properties ], [ 'protobuf', protobuf ], [ 'puppet', puppet ],
  [ 'purebasic', purebasic ], [ 'python', python ], [ 'q', q ], [ 'qml', qml ],
  [ 'r', r ], [ 'reasonml', reasonml ], [ 'rib', rib ], [ 'roboconf', roboconf ],
  [ 'routeros', routeros ], [ 'rsl', rsl ], [ 'ruleslanguage', ruleslanguage ],
  [ 'rust', rust ], [ 'sas', sas ], [ 'scala', scala ], [ 'scheme', scheme ],
  [ 'scilab', scilab ], [ 'scss', scss ], [ 'shell', shell ], [ 'smali', smali ],
  [ 'smalltalk', smalltalk ], [ 'sml', sml ], [ 'sql', sql ], [ 'stan', stan ],
  [ 'stata', stata ], [ 'step21', step21 ], [ 'stylus', stylus ], [ 'subunit', subunit ],
  [ 'swift', swift ], [ 'taggerscript', taggerscript ], [ 'yaml', yaml ], [ 'tap', tap ],
  [ 'tcl', tcl ], [ 'thrift', thrift ], [ 'tp', tp ], [ 'twig', twig ],
  [ 'typescript', typescript ], [ 'vala', vala ], [ 'vbnet', vbnet ], [ 'vbscript', vbscript ],
  [ 'vbscript-html', vbscript_html ], [ 'verilog', verilog ], [ 'vhdl', vhdl ], [ 'vim', vim ],
  [ 'x86asm', x86asm ], [ 'xl', xl ], [ 'xquery', xquery ], [ 'zephir', zephir ],
]);
for (const [ Key, Value] of langs.entries()) {
  hljs.registerLanguage(Key, Value);
}
export default hljs;

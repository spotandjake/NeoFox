// Core import
import hljs from 'highlight.js/lib/core'

// Languages import
import lang_actionscript from 'highlight.js/lib/languages/actionscript';
import lang_ada from 'highlight.js/lib/languages/ada';
import lang_angelscript from 'highlight.js/lib/languages/angelscript';
import lang_apache from 'highlight.js/lib/languages/apache';
import lang_applescript from 'highlight.js/lib/languages/applescript';
import lang_arcade from 'highlight.js/lib/languages/arcade';
import lang_arduino from 'highlight.js/lib/languages/arduino';        
import lang_armasm from 'highlight.js/lib/languages/armasm';
import lang_xml from 'highlight.js/lib/languages/xml';
import lang_asciidoc from 'highlight.js/lib/languages/asciidoc';
import lang_aspectj from 'highlight.js/lib/languages/aspectj';
import lang_autohotkey from 'highlight.js/lib/languages/autohotkey';
// import lang_autoit from 'highlight.js/lib/languages/autoit';
import lang_avrasm from 'highlight.js/lib/languages/avrasm';
import lang_awk from 'highlight.js/lib/languages/awk';
import lang_axapta from 'highlight.js/lib/languages/axapta';
import lang_bash from 'highlight.js/lib/languages/bash';
import lang_basic from 'highlight.js/lib/languages/basic';
import lang_bnf from 'highlight.js/lib/languages/bnf';
import lang_brainfuck from 'highlight.js/lib/languages/brainfuck';
import lang_c from 'highlight.js/lib/languages/c';
import lang_cal from 'highlight.js/lib/languages/cal';
import lang_capnproto from 'highlight.js/lib/languages/capnproto';
import lang_ceylon from 'highlight.js/lib/languages/ceylon';
import lang_clean from 'highlight.js/lib/languages/clean';
import lang_clojure from 'highlight.js/lib/languages/clojure';
import lang_clojure_repl from 'highlight.js/lib/languages/clojure-repl';
import lang_cmake from 'highlight.js/lib/languages/cmake';
import lang_coffeescript from 'highlight.js/lib/languages/coffeescript';
import lang_coq from 'highlight.js/lib/languages/coq';
import lang_cos from 'highlight.js/lib/languages/cos';
import lang_cpp from 'highlight.js/lib/languages/cpp';
import lang_crmsh from 'highlight.js/lib/languages/crmsh';
import lang_crystal from 'highlight.js/lib/languages/crystal';
import lang_csharp from 'highlight.js/lib/languages/csharp';
import lang_csp from 'highlight.js/lib/languages/csp';
import lang_css from 'highlight.js/lib/languages/css';
import lang_d from 'highlight.js/lib/languages/d';
import lang_markdown from 'highlight.js/lib/languages/markdown';
import lang_dart from 'highlight.js/lib/languages/dart';
import lang_delphi from 'highlight.js/lib/languages/delphi';
import lang_diff from 'highlight.js/lib/languages/diff';
import lang_django from 'highlight.js/lib/languages/django';
import lang_dns from 'highlight.js/lib/languages/dns';
import lang_dockerfile from 'highlight.js/lib/languages/dockerfile';
import lang_dos from 'highlight.js/lib/languages/dos';
import lang_dsconfig from 'highlight.js/lib/languages/dsconfig';
import lang_dts from 'highlight.js/lib/languages/dts';
import lang_dust from 'highlight.js/lib/languages/dust';
import lang_ebnf from 'highlight.js/lib/languages/ebnf';
import lang_elixir from 'highlight.js/lib/languages/elixir';
import lang_elm from 'highlight.js/lib/languages/elm';
import lang_ruby from 'highlight.js/lib/languages/ruby';
import lang_erb from 'highlight.js/lib/languages/erb';
import lang_erlang_repl from 'highlight.js/lib/languages/erlang-repl';
import lang_erlang from 'highlight.js/lib/languages/erlang';
import lang_excel from 'highlight.js/lib/languages/excel';
import lang_fix from 'highlight.js/lib/languages/fix';
import lang_flix from 'highlight.js/lib/languages/flix';
import lang_fortran from 'highlight.js/lib/languages/fortran';
import lang_fsharp from 'highlight.js/lib/languages/fsharp';
import lang_gams from 'highlight.js/lib/languages/gams';
// import lang_gauss from 'highlight.js/lib/languages/gauss';
import lang_gcode from 'highlight.js/lib/languages/gcode';
import lang_gherkin from 'highlight.js/lib/languages/gherkin';
import lang_glsl from 'highlight.js/lib/languages/glsl';
// import lang_gml from 'highlight.js/lib/languages/gml';
import lang_go from 'highlight.js/lib/languages/go';
import lang_golo from 'highlight.js/lib/languages/golo';
import lang_gradle from 'highlight.js/lib/languages/gradle';
import lang_groovy from 'highlight.js/lib/languages/groovy';
import lang_haml from 'highlight.js/lib/languages/haml';
import lang_handlebars from 'highlight.js/lib/languages/handlebars';
import lang_haskell from 'highlight.js/lib/languages/haskell';
import lang_haxe from 'highlight.js/lib/languages/haxe';
import lang_hsp from 'highlight.js/lib/languages/hsp';
import lang_http from 'highlight.js/lib/languages/http';
import lang_hy from 'highlight.js/lib/languages/hy';
import lang_inform7 from 'highlight.js/lib/languages/inform7';
import lang_ini from 'highlight.js/lib/languages/ini';
import lang_irpf90 from 'highlight.js/lib/languages/irpf90';
// import lang_isbl from 'highlight.js/lib/languages/isbl';
import lang_java from 'highlight.js/lib/languages/java';
import lang_javascript from 'highlight.js/lib/languages/javascript';
import lang_jboss_cli from 'highlight.js/lib/languages/jboss-cli';
import lang_json from 'highlight.js/lib/languages/json';
import lang_julia from 'highlight.js/lib/languages/julia';
import lang_julia_repl from 'highlight.js/lib/languages/julia-repl';
import lang_kotlin from 'highlight.js/lib/languages/kotlin';
import lang_lasso from 'highlight.js/lib/languages/lasso';
import lang_latex from 'highlight.js/lib/languages/latex';
import lang_ldif from 'highlight.js/lib/languages/ldif';
import lang_leaf from 'highlight.js/lib/languages/leaf';
import lang_less from 'highlight.js/lib/languages/less';
import lang_lisp from 'highlight.js/lib/languages/lisp';
import lang_livecodeserver from 'highlight.js/lib/languages/livecodeserver';
import lang_livescript from 'highlight.js/lib/languages/livescript';
import lang_llvm from 'highlight.js/lib/languages/llvm';
import lang_lsl from 'highlight.js/lib/languages/lsl';
import lang_lua from 'highlight.js/lib/languages/lua';
import lang_makefile from 'highlight.js/lib/languages/makefile';
// import lang_mathematica from 'highlight.js/lib/languages/mathematica';
import lang_matlab from 'highlight.js/lib/languages/matlab';
// import lang_maxima from 'highlight.js/lib/languages/maxima';
import lang_mel from 'highlight.js/lib/languages/mel';
import lang_mercury from 'highlight.js/lib/languages/mercury';
import lang_mipsasm from 'highlight.js/lib/languages/mipsasm';
import lang_mizar from 'highlight.js/lib/languages/mizar';
import lang_perl from 'highlight.js/lib/languages/perl';
import lang_mojolicious from 'highlight.js/lib/languages/mojolicious';
import lang_monkey from 'highlight.js/lib/languages/monkey';
import lang_moonscript from 'highlight.js/lib/languages/moonscript';
import lang_n1ql from 'highlight.js/lib/languages/n1ql';
import lang_nginx from 'highlight.js/lib/languages/nginx';
import lang_nim from 'highlight.js/lib/languages/nim';
import lang_nix from 'highlight.js/lib/languages/nix';
import lang_node_repl from 'highlight.js/lib/languages/node-repl';
import lang_nsis from 'highlight.js/lib/languages/nsis';
import lang_objectivec from 'highlight.js/lib/languages/objectivec';
import lang_ocaml from 'highlight.js/lib/languages/ocaml';
import lang_openscad from 'highlight.js/lib/languages/openscad';
import lang_oxygene from 'highlight.js/lib/languages/oxygene';
import lang_parser3 from 'highlight.js/lib/languages/parser3';
import lang_pf from 'highlight.js/lib/languages/pf';
import lang_pgsql from 'highlight.js/lib/languages/pgsql';
import lang_php from 'highlight.js/lib/languages/php';
import lang_php_template from 'highlight.js/lib/languages/php-template';
import lang_plaintext from 'highlight.js/lib/languages/plaintext';
import lang_pony from 'highlight.js/lib/languages/pony';
import lang_powershell from 'highlight.js/lib/languages/powershell';
import lang_processing from 'highlight.js/lib/languages/processing';
import lang_profile from 'highlight.js/lib/languages/profile';
import lang_prolog from 'highlight.js/lib/languages/prolog';
import lang_properties from 'highlight.js/lib/languages/properties';
import lang_protobuf from 'highlight.js/lib/languages/protobuf';
import lang_puppet from 'highlight.js/lib/languages/puppet';
import lang_purebasic from 'highlight.js/lib/languages/purebasic';
import lang_python from 'highlight.js/lib/languages/python';
import lang_python_repl from 'highlight.js/lib/languages/python-repl';
import lang_q from 'highlight.js/lib/languages/q';
import lang_qml from 'highlight.js/lib/languages/qml';
import lang_r from 'highlight.js/lib/languages/r';
import lang_reasonml from 'highlight.js/lib/languages/reasonml';
import lang_rib from 'highlight.js/lib/languages/rib';
import lang_roboconf from 'highlight.js/lib/languages/roboconf';
import lang_routeros from 'highlight.js/lib/languages/routeros';
import lang_rsl from 'highlight.js/lib/languages/rsl';
import lang_ruleslanguage from 'highlight.js/lib/languages/ruleslanguage';
import lang_rust from 'highlight.js/lib/languages/rust';
import lang_sas from 'highlight.js/lib/languages/sas';
import lang_scala from 'highlight.js/lib/languages/scala';
import lang_scheme from 'highlight.js/lib/languages/scheme';
import lang_scilab from 'highlight.js/lib/languages/scilab';
import lang_scss from 'highlight.js/lib/languages/scss';
import lang_shell from 'highlight.js/lib/languages/shell';
import lang_smali from 'highlight.js/lib/languages/smali';
import lang_smalltalk from 'highlight.js/lib/languages/smalltalk';
import lang_sml from 'highlight.js/lib/languages/sml';
// import lang_sqf from 'highlight.js/lib/languages/sqf';
import lang_sql from 'highlight.js/lib/languages/sql';
import lang_stan from 'highlight.js/lib/languages/stan';
import lang_stata from 'highlight.js/lib/languages/stata';
import lang_step21 from 'highlight.js/lib/languages/step21';
import lang_stylus from 'highlight.js/lib/languages/stylus';
import lang_subunit from 'highlight.js/lib/languages/subunit';
import lang_swift from 'highlight.js/lib/languages/swift';
import lang_taggerscript from 'highlight.js/lib/languages/taggerscript';
import lang_yaml from 'highlight.js/lib/languages/yaml';
import lang_tap from 'highlight.js/lib/languages/tap';
import lang_tcl from 'highlight.js/lib/languages/tcl';
import lang_thrift from 'highlight.js/lib/languages/thrift';
import lang_tp from 'highlight.js/lib/languages/tp';
import lang_twig from 'highlight.js/lib/languages/twig';
import lang_typescript from 'highlight.js/lib/languages/typescript';
import lang_vala from 'highlight.js/lib/languages/vala';
import lang_vbnet from 'highlight.js/lib/languages/vbnet';
import lang_vbscript from 'highlight.js/lib/languages/vbscript';
import lang_vbscript_html from 'highlight.js/lib/languages/vbscript-html';
import lang_verilog from 'highlight.js/lib/languages/verilog';
import lang_vhdl from 'highlight.js/lib/languages/vhdl';
import lang_vim from 'highlight.js/lib/languages/vim';
import lang_x86asm from 'highlight.js/lib/languages/x86asm';
import lang_xl from 'highlight.js/lib/languages/xl';
import lang_xquery from 'highlight.js/lib/languages/xquery';
import lang_zephir from 'highlight.js/lib/languages/zephir';

// RegisterLanguages
hljs.registerLanguage('actionscript', lang_actionscript);
hljs.registerLanguage('ada', lang_ada);
hljs.registerLanguage('angelscript', lang_angelscript);
hljs.registerLanguage('apache', lang_apache);
hljs.registerLanguage('applescript', lang_applescript);
hljs.registerLanguage('arcade', lang_arcade);
hljs.registerLanguage('arduino', lang_arduino);
hljs.registerLanguage('armasm', lang_armasm);
hljs.registerLanguage('xml', lang_xml);
hljs.registerLanguage('asciidoc', lang_asciidoc);
hljs.registerLanguage('aspectj', lang_aspectj);
hljs.registerLanguage('autohotkey', lang_autohotkey);
// hljs.registerLanguage('autoit', lang_autoit);
hljs.registerLanguage('avrasm', lang_avrasm);
hljs.registerLanguage('awk', lang_awk);
hljs.registerLanguage('axapta', lang_axapta);
hljs.registerLanguage('bash', lang_bash);
hljs.registerLanguage('basic', lang_basic);
hljs.registerLanguage('bnf', lang_bnf);
hljs.registerLanguage('brainfuck', lang_brainfuck);
hljs.registerLanguage('c', lang_c);
hljs.registerLanguage('cal', lang_cal);
hljs.registerLanguage('capnproto', lang_capnproto);
hljs.registerLanguage('ceylon', lang_ceylon);
hljs.registerLanguage('clean', lang_clean);
hljs.registerLanguage('clojure', lang_clojure);
hljs.registerLanguage('clojure-repl', lang_clojure_repl);
hljs.registerLanguage('cmake', lang_cmake);
hljs.registerLanguage('coffeescript', lang_coffeescript);
hljs.registerLanguage('coq', lang_coq);
hljs.registerLanguage('cos', lang_cos);
hljs.registerLanguage('cpp', lang_cpp);
hljs.registerLanguage('crmsh', lang_crmsh);
hljs.registerLanguage('crystal', lang_crystal);
hljs.registerLanguage('csharp', lang_csharp);
hljs.registerLanguage('csp', lang_csp);
hljs.registerLanguage('css', lang_css);
hljs.registerLanguage('d', lang_d);
hljs.registerLanguage('markdown', lang_markdown);
hljs.registerLanguage('dart', lang_dart);
hljs.registerLanguage('delphi', lang_delphi);
hljs.registerLanguage('diff', lang_diff);
hljs.registerLanguage('django', lang_django);
hljs.registerLanguage('dns', lang_dns);
hljs.registerLanguage('dockerfile', lang_dockerfile);
hljs.registerLanguage('dos', lang_dos);
hljs.registerLanguage('dsconfig', lang_dsconfig);
hljs.registerLanguage('dts', lang_dts);
hljs.registerLanguage('dust', lang_dust);
hljs.registerLanguage('ebnf', lang_ebnf);
hljs.registerLanguage('elixir', lang_elixir);
hljs.registerLanguage('elm', lang_elm);
hljs.registerLanguage('ruby', lang_ruby);
hljs.registerLanguage('erb', lang_erb);
hljs.registerLanguage('erlang-repl', lang_erlang_repl);
hljs.registerLanguage('erlang', lang_erlang);
hljs.registerLanguage('excel', lang_excel);
hljs.registerLanguage('fix', lang_fix);
hljs.registerLanguage('flix', lang_flix);
hljs.registerLanguage('fortran', lang_fortran);
hljs.registerLanguage('fsharp', lang_fsharp);
hljs.registerLanguage('gams', lang_gams);
// hljs.registerLanguage('gauss', lang_gauss);
hljs.registerLanguage('gcode', lang_gcode);
hljs.registerLanguage('gherkin', lang_gherkin);
hljs.registerLanguage('glsl', lang_glsl);
// hljs.registerLanguage('gml', lang_gml);
hljs.registerLanguage('go', lang_go);
hljs.registerLanguage('golo', lang_golo);
hljs.registerLanguage('gradle', lang_gradle);
hljs.registerLanguage('groovy', lang_groovy);
hljs.registerLanguage('haml', lang_haml);
hljs.registerLanguage('handlebars', lang_handlebars);
hljs.registerLanguage('haskell', lang_haskell);
hljs.registerLanguage('haxe', lang_haxe);
hljs.registerLanguage('hsp', lang_hsp);
hljs.registerLanguage('http', lang_http);
hljs.registerLanguage('hy', lang_hy);
hljs.registerLanguage('inform7', lang_inform7);
hljs.registerLanguage('ini', lang_ini);
hljs.registerLanguage('irpf90', lang_irpf90);
// hljs.registerLanguage('isbl', lang_isbl);
hljs.registerLanguage('java', lang_java);
hljs.registerLanguage('javascript', lang_javascript);
hljs.registerLanguage('jboss-cli', lang_jboss_cli);
hljs.registerLanguage('json', lang_json);
hljs.registerLanguage('julia', lang_julia);
hljs.registerLanguage('julia-repl', lang_julia_repl);
hljs.registerLanguage('kotlin', lang_kotlin);
hljs.registerLanguage('lasso', lang_lasso);
hljs.registerLanguage('latex', lang_latex);
hljs.registerLanguage('ldif', lang_ldif);
hljs.registerLanguage('leaf', lang_leaf);
hljs.registerLanguage('less', lang_less);
hljs.registerLanguage('lisp', lang_lisp);
hljs.registerLanguage('livecodeserver', lang_livecodeserver);
hljs.registerLanguage('livescript', lang_livescript);
hljs.registerLanguage('llvm', lang_llvm);
hljs.registerLanguage('lsl', lang_lsl);
hljs.registerLanguage('lua', lang_lua);
hljs.registerLanguage('makefile', lang_makefile);
// hljs.registerLanguage('mathematica', lang_mathematica);
hljs.registerLanguage('matlab', lang_matlab);
// hljs.registerLanguage('maxima', lang_maxima);
hljs.registerLanguage('mel', lang_mel);
hljs.registerLanguage('mercury', lang_mercury);
hljs.registerLanguage('mipsasm', lang_mipsasm);
hljs.registerLanguage('mizar', lang_mizar);
hljs.registerLanguage('perl', lang_perl);
hljs.registerLanguage('mojolicious', lang_mojolicious);
hljs.registerLanguage('monkey', lang_monkey);
hljs.registerLanguage('moonscript', lang_moonscript);
hljs.registerLanguage('n1ql', lang_n1ql);
hljs.registerLanguage('nginx', lang_nginx);
hljs.registerLanguage('nim', lang_nim);
hljs.registerLanguage('nix', lang_nix);
hljs.registerLanguage('node-repl', lang_node_repl);
hljs.registerLanguage('nsis', lang_nsis);
hljs.registerLanguage('objectivec', lang_objectivec);
hljs.registerLanguage('ocaml', lang_ocaml);
hljs.registerLanguage('openscad', lang_openscad);
hljs.registerLanguage('oxygene', lang_oxygene);
hljs.registerLanguage('parser3', lang_parser3);
hljs.registerLanguage('pf', lang_pf);
hljs.registerLanguage('pgsql', lang_pgsql);
hljs.registerLanguage('php', lang_php);
hljs.registerLanguage('php-template', lang_php_template);
hljs.registerLanguage('plaintext', lang_plaintext);
hljs.registerLanguage('pony', lang_pony);
hljs.registerLanguage('powershell', lang_powershell);
hljs.registerLanguage('processing', lang_processing);
hljs.registerLanguage('profile', lang_profile);
hljs.registerLanguage('prolog', lang_prolog);
hljs.registerLanguage('properties', lang_properties);
hljs.registerLanguage('protobuf', lang_protobuf);
hljs.registerLanguage('puppet', lang_puppet);
hljs.registerLanguage('purebasic', lang_purebasic);
hljs.registerLanguage('python', lang_python);
hljs.registerLanguage('python-repl', lang_python_repl);
hljs.registerLanguage('q', lang_q);
hljs.registerLanguage('qml', lang_qml);
hljs.registerLanguage('r', lang_r);
hljs.registerLanguage('reasonml', lang_reasonml);
hljs.registerLanguage('rib', lang_rib);
hljs.registerLanguage('roboconf', lang_roboconf);
hljs.registerLanguage('routeros', lang_routeros);
hljs.registerLanguage('rsl', lang_rsl);
hljs.registerLanguage('ruleslanguage', lang_ruleslanguage);
hljs.registerLanguage('rust', lang_rust);
hljs.registerLanguage('sas', lang_sas);
hljs.registerLanguage('scala', lang_scala);
hljs.registerLanguage('scheme', lang_scheme);
hljs.registerLanguage('scilab', lang_scilab);
hljs.registerLanguage('scss', lang_scss);
hljs.registerLanguage('shell', lang_shell);
hljs.registerLanguage('smali', lang_smali);
hljs.registerLanguage('smalltalk', lang_smalltalk);
hljs.registerLanguage('sml', lang_sml);
// hljs.registerLanguage('sqf', lang_sqf);
hljs.registerLanguage('sql', lang_sql);
hljs.registerLanguage('stan', lang_stan);
hljs.registerLanguage('stata', lang_stata);
hljs.registerLanguage('step21', lang_step21);
hljs.registerLanguage('stylus', lang_stylus);
hljs.registerLanguage('subunit', lang_subunit);
hljs.registerLanguage('swift', lang_swift);
hljs.registerLanguage('taggerscript', lang_taggerscript);
hljs.registerLanguage('yaml', lang_yaml);
hljs.registerLanguage('tap', lang_tap);
hljs.registerLanguage('tcl', lang_tcl);
hljs.registerLanguage('thrift', lang_thrift);
hljs.registerLanguage('tp', lang_tp);
hljs.registerLanguage('twig', lang_twig);
hljs.registerLanguage('typescript', lang_typescript);
hljs.registerLanguage('vala', lang_vala);
hljs.registerLanguage('vbnet', lang_vbnet);
hljs.registerLanguage('vbscript', lang_vbscript);
hljs.registerLanguage('vbscript-html', lang_vbscript_html);
hljs.registerLanguage('verilog', lang_verilog);
hljs.registerLanguage('vhdl', lang_vhdl);
hljs.registerLanguage('vim', lang_vim);
hljs.registerLanguage('x86asm', lang_x86asm);
hljs.registerLanguage('xl', lang_xl);
hljs.registerLanguage('xquery', lang_xquery);
hljs.registerLanguage('zephir', lang_zephir);

export default hljs;
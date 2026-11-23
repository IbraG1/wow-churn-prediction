/**
 * Churn Prediction Model for World of Warcraft (WoW) Avatars.
 * Generated with m2cgen from XGBoost (n_estimators=50, max_depth=5).
 * 100% pure client-side JavaScript execution (zero external dependencies).
 * 
 * Input feature array order:
 *   [0] total_sessions (number): Total distinct play sessions
 *   [1] avg_session_minutes (number): Average session duration in minutes
 *   [2] max_level (number): Maximum level reached (1 - 80)
 *   [3] level_velocity (number): Levels gained per hour played
 *   [4] has_guild (number): Guild membership flag (1 = yes, 0 = no)
 *   [5] days_active_span (number): Days between first and last connection in window
 *   [6] recency_days (number): Days since last connection to cutoff date
 * 
 * @param {number[]} input - Array of exactly 7 numerical features in the order above.
 * @returns {number[]} [prob_retained, prob_churn]
 */
export function score(input) {
    var var0;
    if (input[6] < 7.9778123) {
        if (input[0] < 6.0) {
            if (input[2] < 9.0) {
                if (input[5] < 0.0646412) {
                    if (input[6] < 1.04603) {
                        var0 = 0.07755102;
                    } else {
                        var0 = 0.15932204;
                    }
                } else {
                    if (input[6] < 1.147037) {
                        var0 = -0.03478261;
                    } else {
                        var0 = 0.097196266;
                    }
                }
            } else {
                if (input[1] < 10.379746) {
                    if (input[4] < 1.0) {
                        var0 = 0.11363637;
                    } else {
                        var0 = 0.01818182;
                    }
                } else {
                    if (input[6] < 1.2749422) {
                        var0 = -0.112500004;
                    } else {
                        var0 = 0.013333335;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[2] < 59.0) {
                    if (input[0] < 40.0) {
                        var0 = -0.12083334;
                    } else {
                        var0 = -0.17565218;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var0 = -0.12340426;
                    } else {
                        var0 = -0.19121622;
                    }
                }
            } else {
                if (input[0] < 127.0) {
                    if (input[0] < 8.0) {
                        var0 = 0.004166667;
                    } else {
                        var0 = -0.07716536;
                    }
                } else {
                    if (input[5] < 276.13577) {
                        var0 = -0.08631579;
                    } else {
                        var0 = -0.15652174;
                    }
                }
            }
        }
    } else {
        if (input[5] < 237.56963) {
            if (input[6] < 20.101309) {
                if (input[0] < 5.0) {
                    if (input[2] < 35.0) {
                        var0 = 0.1726415;
                    } else {
                        var0 = 0.116612375;
                    }
                } else {
                    if (input[0] < 35.0) {
                        var0 = 0.06743516;
                    } else {
                        var0 = -0.017777778;
                    }
                }
            } else {
                if (input[5] < 59.871376) {
                    if (input[2] < 23.0) {
                        var0 = 0.19433518;
                    } else {
                        var0 = 0.17246175;
                    }
                } else {
                    if (input[6] < 38.357895) {
                        var0 = 0.12118226;
                    } else {
                        var0 = 0.160192;
                    }
                }
            }
        } else {
            if (input[6] < 21.065683) {
                if (input[0] < 27.0) {
                    if (input[2] < 12.0) {
                        var0 = 0.018947368;
                    } else {
                        var0 = 0.10537634;
                    }
                } else {
                    if (input[0] < 116.0) {
                        var0 = -0.019141914;
                    } else {
                        var0 = -0.08711656;
                    }
                }
            } else {
                if (input[6] < 38.357895) {
                    if (input[0] < 27.0) {
                        var0 = 0.10449827;
                    } else {
                        var0 = 0.054651167;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var0 = 0.16626506;
                    } else {
                        var0 = 0.12025118;
                    }
                }
            }
        }
    }
    var var1;
    if (input[6] < 7.9778123) {
        if (input[0] < 5.0) {
            if (input[2] < 9.0) {
                if (input[6] < 1.147037) {
                    if (input[5] < 0.006134259) {
                        var1 = 0.11814326;
                    } else {
                        var1 = -0.019878501;
                    }
                } else {
                    if (input[1] < 20.37037) {
                        var1 = 0.14494966;
                    } else {
                        var1 = 0.08857641;
                    }
                }
            } else {
                if (input[5] < 0.013518519) {
                    if (input[4] < 1.0) {
                        var1 = 0.103637755;
                    } else {
                        var1 = 0.023728607;
                    }
                } else {
                    if (input[6] < 1.909294) {
                        var1 = -0.108351246;
                    } else {
                        var1 = 0.032767456;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[1] < 33.548386) {
                    if (input[0] < 6.0) {
                        var1 = 0.04999709;
                    } else {
                        var1 = -0.116482295;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var1 = -0.11005872;
                    } else {
                        var1 = -0.17167902;
                    }
                }
            } else {
                if (input[0] < 120.0) {
                    if (input[0] < 8.0) {
                        var1 = -0.005833491;
                    } else {
                        var1 = -0.06881398;
                    }
                } else {
                    if (input[5] < 276.13577) {
                        var1 = -0.07308676;
                    } else {
                        var1 = -0.14181308;
                    }
                }
            }
        }
    } else {
        if (input[5] < 148.84981) {
            if (input[6] < 20.101309) {
                if (input[0] < 5.0) {
                    if (input[2] < 27.0) {
                        var1 = 0.15765227;
                    } else {
                        var1 = 0.10735575;
                    }
                } else {
                    if (input[0] < 35.0) {
                        var1 = 0.05569122;
                    } else {
                        var1 = -0.0110647045;
                    }
                }
            } else {
                if (input[5] < 7.4992476) {
                    if (input[2] < 65.0) {
                        var1 = 0.17758386;
                    } else {
                        var1 = 0.11231482;
                    }
                } else {
                    if (input[6] < 38.357895) {
                        var1 = 0.13364288;
                    } else {
                        var1 = 0.1618744;
                    }
                }
            }
        } else {
            if (input[6] < 21.065683) {
                if (input[0] < 29.0) {
                    if (input[2] < 3.0) {
                        var1 = -0.0006694451;
                    } else {
                        var1 = 0.09075348;
                    }
                } else {
                    if (input[0] < 116.0) {
                        var1 = -0.01258217;
                    } else {
                        var1 = -0.075706616;
                    }
                }
            } else {
                if (input[6] < 38.357895) {
                    if (input[0] < 14.0) {
                        var1 = 0.11543187;
                    } else {
                        var1 = 0.060913455;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var1 = 0.14473352;
                    } else {
                        var1 = 0.11571268;
                    }
                }
            }
        }
    }
    var var2;
    if (input[6] < 7.9778123) {
        if (input[0] < 5.0) {
            if (input[2] < 56.0) {
                if (input[6] < 1.147037) {
                    if (input[5] < 0.013518519) {
                        var2 = 0.093609296;
                    } else {
                        var2 = -0.042241406;
                    }
                } else {
                    if (input[2] < 5.0) {
                        var2 = 0.12818399;
                    } else {
                        var2 = 0.074037015;
                    }
                }
            } else {
                if (input[6] < 1.909294) {
                    if (input[2] < 63.0) {
                        var2 = -0.14564659;
                    } else {
                        var2 = -0.033323728;
                    }
                } else {
                    if (input[5] < 0.083715275) {
                        var2 = 0.1001521;
                    } else {
                        var2 = -0.0027911647;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[2] < 16.0) {
                    if (input[0] < 30.0) {
                        var2 = -0.046396088;
                    } else {
                        var2 = -0.15139243;
                    }
                } else {
                    if (input[0] < 6.0) {
                        var2 = -0.059167117;
                    } else {
                        var2 = -0.15873252;
                    }
                }
            } else {
                if (input[0] < 127.0) {
                    if (input[0] < 11.0) {
                        var2 = -0.023307167;
                    } else {
                        var2 = -0.07103305;
                    }
                } else {
                    if (input[5] < 276.13577) {
                        var2 = -0.07679796;
                    } else {
                        var2 = -0.13153496;
                    }
                }
            }
        }
    } else {
        if (input[5] < 148.84981) {
            if (input[6] < 19.153357) {
                if (input[0] < 5.0) {
                    if (input[2] < 7.0) {
                        var2 = 0.14851344;
                    } else {
                        var2 = 0.105803944;
                    }
                } else {
                    if (input[3] < 0.9230769) {
                        var2 = 0.0076736445;
                    } else {
                        var2 = 0.0737439;
                    }
                }
            } else {
                if (input[2] < 23.0) {
                    if (input[5] < 22.98294) {
                        var2 = 0.16411792;
                    } else {
                        var2 = 0.14754835;
                    }
                } else {
                    if (input[6] < 38.357895) {
                        var2 = 0.10130397;
                    } else {
                        var2 = 0.14097492;
                    }
                }
            }
        } else {
            if (input[6] < 21.065683) {
                if (input[0] < 29.0) {
                    if (input[2] < 3.0) {
                        var2 = -0.00060606207;
                    } else {
                        var2 = 0.08231358;
                    }
                } else {
                    if (input[0] < 116.0) {
                        var2 = -0.011339843;
                    } else {
                        var2 = -0.06853175;
                    }
                }
            } else {
                if (input[6] < 38.357895) {
                    if (input[0] < 14.0) {
                        var2 = 0.105104364;
                    } else {
                        var2 = 0.055053867;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var2 = 0.13516222;
                    } else {
                        var2 = 0.106277205;
                    }
                }
            }
        }
    }
    var var3;
    if (input[6] < 7.9778123) {
        if (input[0] < 5.0) {
            if (input[2] < 56.0) {
                if (input[6] < 1.147037) {
                    if (input[5] < 0.007777778) {
                        var3 = 0.09659654;
                    } else {
                        var3 = -0.031453863;
                    }
                } else {
                    if (input[5] < 1.7756366) {
                        var3 = 0.11256987;
                    } else {
                        var3 = 0.052836854;
                    }
                }
            } else {
                if (input[6] < 1.909294) {
                    if (input[2] < 63.0) {
                        var3 = -0.1346347;
                    } else {
                        var3 = -0.03137089;
                    }
                } else {
                    if (input[1] < 90.21164) {
                        var3 = 0.03335809;
                    } else {
                        var3 = -0.09654206;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[2] < 59.0) {
                    if (input[0] < 40.0) {
                        var3 = -0.08188041;
                    } else {
                        var3 = -0.13812824;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var3 = -0.09312079;
                    } else {
                        var3 = -0.15049562;
                    }
                }
            } else {
                if (input[0] < 120.0) {
                    if (input[2] < 48.0) {
                        var3 = -0.02499136;
                    } else {
                        var3 = -0.06581586;
                    }
                } else {
                    if (input[1] < 137.75862) {
                        var3 = -0.12010713;
                    } else {
                        var3 = -0.054166466;
                    }
                }
            }
        }
    } else {
        if (input[5] < 148.84981) {
            if (input[6] < 20.101309) {
                if (input[0] < 5.0) {
                    if (input[2] < 27.0) {
                        var3 = 0.13466021;
                    } else {
                        var3 = 0.088595495;
                    }
                } else {
                    if (input[6] < 15.317882) {
                        var3 = 0.013637629;
                    } else {
                        var3 = 0.06901775;
                    }
                }
            } else {
                if (input[2] < 23.0) {
                    if (input[5] < 21.605915) {
                        var3 = 0.15357214;
                    } else {
                        var3 = 0.13768801;
                    }
                } else {
                    if (input[6] < 38.357895) {
                        var3 = 0.09230982;
                    } else {
                        var3 = 0.1306884;
                    }
                }
            }
        } else {
            if (input[6] < 22.467766) {
                if (input[0] < 29.0) {
                    if (input[2] < 3.0) {
                        var3 = 0.0063860985;
                    } else {
                        var3 = 0.07798489;
                    }
                } else {
                    if (input[0] < 136.0) {
                        var3 = -0.0121482145;
                    } else {
                        var3 = -0.06527744;
                    }
                }
            } else {
                if (input[6] < 49.92579) {
                    if (input[0] < 27.0) {
                        var3 = 0.09236887;
                    } else {
                        var3 = 0.052155104;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var3 = 0.12534235;
                    } else {
                        var3 = 0.09927588;
                    }
                }
            }
        }
    }
    var var4;
    if (input[6] < 7.9778123) {
        if (input[0] < 6.0) {
            if (input[5] < 0.076203704) {
                if (input[2] < 19.0) {
                    if (input[3] < 3.7142856) {
                        var4 = 0.1171005;
                    } else {
                        var4 = 0.05070774;
                    }
                } else {
                    if (input[6] < 0.28248844) {
                        var4 = -0.06044971;
                    } else {
                        var4 = 0.06546541;
                    }
                }
            } else {
                if (input[6] < 1.147037) {
                    if (input[1] < 45.333332) {
                        var4 = -0.028810307;
                    } else {
                        var4 = -0.1259703;
                    }
                } else {
                    if (input[2] < 44.0) {
                        var4 = 0.0580763;
                    } else {
                        var4 = -0.014996365;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[2] < 59.0) {
                    if (input[5] < 282.88336) {
                        var4 = -0.11508043;
                    } else {
                        var4 = -0.058630068;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var4 = -0.08602479;
                    } else {
                        var4 = -0.14177738;
                    }
                }
            } else {
                if (input[0] < 139.0) {
                    if (input[3] < 1.5918367) {
                        var4 = -0.051643986;
                    } else {
                        var4 = 0.044372797;
                    }
                } else {
                    if (input[5] < 276.13577) {
                        var4 = -0.052688297;
                    } else {
                        var4 = -0.11596049;
                    }
                }
            }
        }
    } else {
        if (input[5] < 148.84981) {
            if (input[6] < 20.101309) {
                if (input[0] < 5.0) {
                    if (input[5] < 0.09741898) {
                        var4 = 0.12823305;
                    } else {
                        var4 = 0.085193306;
                    }
                } else {
                    if (input[2] < 68.0) {
                        var4 = 0.03793621;
                    } else {
                        var4 = -0.040738445;
                    }
                }
            } else {
                if (input[5] < 7.4992476) {
                    if (input[2] < 65.0) {
                        var4 = 0.1449784;
                    } else {
                        var4 = 0.08260156;
                    }
                } else {
                    if (input[6] < 38.357895) {
                        var4 = 0.10207056;
                    } else {
                        var4 = 0.12953725;
                    }
                }
            }
        } else {
            if (input[6] < 21.065683) {
                if (input[0] < 25.0) {
                    if (input[2] < 3.0) {
                        var4 = -0.0039339047;
                    } else {
                        var4 = 0.07432126;
                    }
                } else {
                    if (input[6] < 13.951493) {
                        var4 = -0.059426393;
                    } else {
                        var4 = -0.008492782;
                    }
                }
            } else {
                if (input[6] < 38.986298) {
                    if (input[0] < 20.0) {
                        var4 = 0.08566148;
                    } else {
                        var4 = 0.040878907;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var4 = 0.11671827;
                    } else {
                        var4 = 0.08990165;
                    }
                }
            }
        }
    }
    var var5;
    if (input[6] < 14.345972) {
        if (input[0] < 7.0) {
            if (input[5] < 0.09741898) {
                if (input[6] < 0.48212963) {
                    if (input[5] < 0.013518519) {
                        var5 = 0.054497283;
                    } else {
                        var5 = -0.04518778;
                    }
                } else {
                    if (input[2] < 17.0) {
                        var5 = 0.11672472;
                    } else {
                        var5 = 0.08222642;
                    }
                }
            } else {
                if (input[6] < 2.3790162) {
                    if (input[2] < 11.0) {
                        var5 = 0.018817963;
                    } else {
                        var5 = -0.078819714;
                    }
                } else {
                    if (input[2] < 50.0) {
                        var5 = 0.07732262;
                    } else {
                        var5 = 0.0100166965;
                    }
                }
            }
        } else {
            if (input[6] < 1.4011805) {
                if (input[2] < 17.0) {
                    if (input[0] < 35.0) {
                        var5 = -0.029850844;
                    } else {
                        var5 = -0.1272801;
                    }
                } else {
                    if (input[2] < 71.0) {
                        var5 = -0.11580342;
                    } else {
                        var5 = -0.1413648;
                    }
                }
            } else {
                if (input[0] < 88.0) {
                    if (input[6] < 7.9778123) {
                        var5 = -0.037715726;
                    } else {
                        var5 = 0.017537354;
                    }
                } else {
                    if (input[1] < 134.24603) {
                        var5 = -0.09375434;
                    } else {
                        var5 = -0.037563663;
                    }
                }
            }
        }
    } else {
        if (input[5] < 138.78784) {
            if (input[5] < 10.99706) {
                if (input[2] < 23.0) {
                    var5 = 0.13830505;
                } else {
                    if (input[2] < 65.0) {
                        var5 = 0.11935895;
                    } else {
                        var5 = 0.07694414;
                    }
                }
            } else {
                if (input[6] < 35.974224) {
                    if (input[0] < 7.0) {
                        var5 = 0.10381674;
                    } else {
                        var5 = 0.041276522;
                    }
                } else {
                    if (input[2] < 34.0) {
                        var5 = 0.12722252;
                    } else {
                        var5 = 0.10594243;
                    }
                }
            }
        } else {
            if (input[6] < 37.20434) {
                if (input[0] < 20.0) {
                    if (input[0] < 6.0) {
                        var5 = 0.10274364;
                    } else {
                        var5 = 0.057649285;
                    }
                } else {
                    if (input[3] < 0.2945892) {
                        var5 = 0.007311897;
                    } else {
                        var5 = 0.059395492;
                    }
                }
            } else {
                if (input[0] < 10.0) {
                    if (input[2] < 69.0) {
                        var5 = 0.11140668;
                    } else {
                        var5 = 0.043596264;
                    }
                } else {
                    if (input[1] < 13.888889) {
                        var5 = 0.042864397;
                    } else {
                        var5 = 0.0867329;
                    }
                }
            }
        }
    }
    var var6;
    if (input[6] < 14.345972) {
        if (input[0] < 5.0) {
            if (input[5] < 0.09741898) {
                if (input[6] < 0.48212963) {
                    if (input[5] < 0.007777778) {
                        var6 = 0.058944922;
                    } else {
                        var6 = -0.03248934;
                    }
                } else {
                    if (input[2] < 17.0) {
                        var6 = 0.10969036;
                    } else {
                        var6 = 0.075734414;
                    }
                }
            } else {
                if (input[6] < 1.909294) {
                    if (input[2] < 56.0) {
                        var6 = -0.007256756;
                    } else {
                        var6 = -0.10763897;
                    }
                } else {
                    if (input[2] < 5.0) {
                        var6 = 0.09706032;
                    } else {
                        var6 = 0.030587522;
                    }
                }
            }
        } else {
            if (input[6] < 1.4011805) {
                if (input[2] < 16.0) {
                    if (input[0] < 35.0) {
                        var6 = -0.018364448;
                    } else {
                        var6 = -0.11911742;
                    }
                } else {
                    if (input[2] < 71.0) {
                        var6 = -0.10655671;
                    } else {
                        var6 = -0.13529621;
                    }
                }
            } else {
                if (input[0] < 79.0) {
                    if (input[6] < 7.9778123) {
                        var6 = -0.02907722;
                    } else {
                        var6 = 0.01967729;
                    }
                } else {
                    if (input[1] < 123.333336) {
                        var6 = -0.08482927;
                    } else {
                        var6 = -0.03989325;
                    }
                }
            }
        }
    } else {
        if (input[5] < 138.78784) {
            if (input[5] < 10.99706) {
                if (input[2] < 23.0) {
                    if (input[6] < 30.384155) {
                        var6 = 0.12189951;
                    } else {
                        var6 = 0.13302013;
                    }
                } else {
                    if (input[6] < 16.111446) {
                        var6 = 0.0130698;
                    } else {
                        var6 = 0.10972535;
                    }
                }
            } else {
                if (input[6] < 19.153357) {
                    if (input[1] < 14.318182) {
                        var6 = -0.028252164;
                    } else {
                        var6 = 0.047065437;
                    }
                } else {
                    if (input[6] < 38.357895) {
                        var6 = 0.08607819;
                    } else {
                        var6 = 0.11581939;
                    }
                }
            }
        } else {
            if (input[6] < 37.20434) {
                if (input[0] < 20.0) {
                    if (input[5] < 232.06094) {
                        var6 = 0.09403425;
                    } else {
                        var6 = 0.050718527;
                    }
                } else {
                    if (input[1] < 16.363636) {
                        var6 = -0.046002794;
                    } else {
                        var6 = 0.026553486;
                    }
                }
            } else {
                if (input[0] < 10.0) {
                    if (input[2] < 69.0) {
                        var6 = 0.104443744;
                    } else {
                        var6 = 0.040369358;
                    }
                } else {
                    if (input[1] < 13.888889) {
                        var6 = 0.039175257;
                    } else {
                        var6 = 0.08019014;
                    }
                }
            }
        }
    }
    var var7;
    if (input[6] < 15.815127) {
        if (input[0] < 5.0) {
            if (input[6] < 5.050463) {
                if (input[5] < 0.0071643516) {
                    if (input[2] < 22.0) {
                        var7 = 0.09569272;
                    } else {
                        var7 = 0.027093036;
                    }
                } else {
                    if (input[2] < 11.0) {
                        var7 = 0.028878499;
                    } else {
                        var7 = -0.03899885;
                    }
                }
            } else {
                if (input[2] < 5.0) {
                    if (input[5] < 302.39465) {
                        var7 = 0.1165488;
                    } else {
                        var7 = -0.02906022;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var7 = 0.072602615;
                    } else {
                        var7 = 0.007778365;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[1] < 33.548386) {
                    if (input[0] < 6.0) {
                        var7 = 0.061672818;
                    } else {
                        var7 = -0.07004564;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var7 = -0.064501636;
                    } else {
                        var7 = -0.12100784;
                    }
                }
            } else {
                if (input[0] < 44.0) {
                    if (input[6] < 7.1494327) {
                        var7 = -0.02410795;
                    } else {
                        var7 = 0.02419411;
                    }
                } else {
                    if (input[6] < 10.358785) {
                        var7 = -0.06856012;
                    } else {
                        var7 = -0.01809766;
                    }
                }
            }
        }
    } else {
        if (input[5] < 138.78784) {
            if (input[5] < 20.38529) {
                if (input[2] < 23.0) {
                    if (input[6] < 32.525105) {
                        var7 = 0.11232921;
                    } else {
                        var7 = 0.12793225;
                    }
                } else {
                    if (input[2] < 67.0) {
                        var7 = 0.10723477;
                    } else {
                        var7 = 0.056881327;
                    }
                }
            } else {
                if (input[6] < 38.357895) {
                    if (input[0] < 12.0) {
                        var7 = 0.09546142;
                    } else {
                        var7 = 0.034212325;
                    }
                } else {
                    if (input[3] < 0.95454544) {
                        var7 = 0.101498105;
                    } else {
                        var7 = 0.12408995;
                    }
                }
            }
        } else {
            if (input[6] < 53.433647) {
                if (input[0] < 27.0) {
                    if (input[0] < 6.0) {
                        var7 = 0.09512716;
                    } else {
                        var7 = 0.05223288;
                    }
                } else {
                    if (input[6] < 22.467766) {
                        var7 = -0.008452771;
                    } else {
                        var7 = 0.03675392;
                    }
                }
            } else {
                if (input[2] < 70.0) {
                    if (input[1] < 13.888889) {
                        var7 = 0.06610148;
                    } else {
                        var7 = 0.0984441;
                    }
                } else {
                    if (input[1] < 76.55173) {
                        var7 = 0.008157436;
                    } else {
                        var7 = 0.081818745;
                    }
                }
            }
        }
    }
    var var8;
    if (input[6] < 19.153357) {
        if (input[0] < 7.0) {
            if (input[2] < 56.0) {
                if (input[6] < 6.05044) {
                    if (input[5] < 0.0071643516) {
                        var8 = 0.08446695;
                    } else {
                        var8 = 0.020546481;
                    }
                } else {
                    if (input[0] < 3.0) {
                        var8 = 0.1033115;
                    } else {
                        var8 = 0.04853127;
                    }
                }
            } else {
                if (input[6] < 4.4514236) {
                    if (input[5] < 0.32644677) {
                        var8 = 0.020799754;
                    } else {
                        var8 = -0.077681;
                    }
                } else {
                    if (input[1] < 16.923077) {
                        var8 = 0.11298954;
                    } else {
                        var8 = 0.014026244;
                    }
                }
            }
        } else {
            if (input[6] < 5.050463) {
                if (input[6] < 1.04603) {
                    if (input[2] < 16.0) {
                        var8 = -0.051320862;
                    } else {
                        var8 = -0.116802506;
                    }
                } else {
                    if (input[0] < 189.0) {
                        var8 = -0.04885772;
                    } else {
                        var8 = -0.09975513;
                    }
                }
            } else {
                if (input[0] < 116.0) {
                    if (input[3] < 1.1052631) {
                        var8 = 0.0006450802;
                    } else {
                        var8 = 0.06868517;
                    }
                } else {
                    if (input[1] < 134.24603) {
                        var8 = -0.05996266;
                    } else {
                        var8 = -0.0035445502;
                    }
                }
            }
        }
    } else {
        if (input[5] < 115.22868) {
            if (input[5] < 3.8679166) {
                if (input[2] < 65.0) {
                    if (input[2] < 14.0) {
                        var8 = 0.12411492;
                    } else {
                        var8 = 0.10988317;
                    }
                } else {
                    if (input[2] < 68.0) {
                        var8 = -0.026282523;
                    } else {
                        var8 = 0.07124765;
                    }
                }
            } else {
                if (input[2] < 38.0) {
                    if (input[6] < 32.525105) {
                        var8 = 0.073881164;
                    } else {
                        var8 = 0.111618996;
                    }
                } else {
                    if (input[1] < 77.7) {
                        var8 = 0.064899996;
                    } else {
                        var8 = 0.09956951;
                    }
                }
            }
        } else {
            if (input[6] < 49.202396) {
                if (input[0] < 8.0) {
                    if (input[1] < 37.5) {
                        var8 = 0.07103434;
                    } else {
                        var8 = 0.118209556;
                    }
                } else {
                    if (input[3] < 0.2945892) {
                        var8 = 0.02198579;
                    } else {
                        var8 = 0.057674754;
                    }
                }
            } else {
                if (input[3] < 0.51428574) {
                    if (input[0] < 4.0) {
                        var8 = 0.10424762;
                    } else {
                        var8 = 0.06845515;
                    }
                } else {
                    if (input[2] < 31.0) {
                        var8 = 0.11016601;
                    } else {
                        var8 = 0.03062111;
                    }
                }
            }
        }
    }
    var var9;
    if (input[6] < 19.153357) {
        if (input[0] < 13.0) {
            if (input[5] < 0.32644677) {
                if (input[6] < 1.04603) {
                    if (input[5] < 0.013518519) {
                        var9 = 0.042731214;
                    } else {
                        var9 = -0.056043174;
                    }
                } else {
                    if (input[2] < 17.0) {
                        var9 = 0.09936209;
                    } else {
                        var9 = 0.05818942;
                    }
                }
            } else {
                if (input[6] < 2.6481366) {
                    if (input[5] < 39.01941) {
                        var9 = -0.057312287;
                    } else {
                        var9 = 0.03304222;
                    }
                } else {
                    if (input[2] < 38.0) {
                        var9 = 0.053014662;
                    } else {
                        var9 = 0.0028926057;
                    }
                }
            }
        } else {
            if (input[6] < 1.4011805) {
                if (input[2] < 71.0) {
                    if (input[5] < 312.33087) {
                        var9 = -0.103191994;
                    } else {
                        var9 = -0.065707296;
                    }
                } else {
                    var9 = -0.12270061;
                }
            } else {
                if (input[0] < 116.0) {
                    if (input[6] < 8.562743) {
                        var9 = -0.032561775;
                    } else {
                        var9 = 0.007343256;
                    }
                } else {
                    if (input[6] < 15.032616) {
                        var9 = -0.06609293;
                    } else {
                        var9 = -0.00619539;
                    }
                }
            }
        }
    } else {
        if (input[5] < 115.22868) {
            if (input[5] < 3.8679166) {
                if (input[2] < 65.0) {
                    if (input[2] < 14.0) {
                        var9 = 0.12034346;
                    } else {
                        var9 = 0.10531155;
                    }
                } else {
                    if (input[2] < 68.0) {
                        var9 = -0.024472669;
                    } else {
                        var9 = 0.06670458;
                    }
                }
            } else {
                if (input[2] < 38.0) {
                    if (input[6] < 32.525105) {
                        var9 = 0.06900667;
                    } else {
                        var9 = 0.10699188;
                    }
                } else {
                    if (input[1] < 77.7) {
                        var9 = 0.060445845;
                    } else {
                        var9 = 0.094373785;
                    }
                }
            }
        } else {
            if (input[6] < 53.141712) {
                if (input[0] < 8.0) {
                    if (input[6] < 51.828472) {
                        var9 = 0.08200074;
                    } else {
                        var9 = -0.012887463;
                    }
                } else {
                    if (input[3] < 0.2945892) {
                        var9 = 0.020816289;
                    } else {
                        var9 = 0.05598065;
                    }
                }
            } else {
                if (input[3] < 0.51428574) {
                    if (input[3] < 0.5) {
                        var9 = 0.06979072;
                    } else {
                        var9 = -0.04219074;
                    }
                } else {
                    if (input[2] < 31.0) {
                        var9 = 0.10424242;
                    } else {
                        var9 = 0.03420737;
                    }
                }
            }
        }
    }
    var var10;
    if (input[6] < 19.153357) {
        if (input[0] < 5.0) {
            if (input[6] < 5.050463) {
                if (input[2] < 56.0) {
                    if (input[5] < 0.0071643516) {
                        var10 = 0.06910888;
                    } else {
                        var10 = 0.015276748;
                    }
                } else {
                    if (input[6] < 1.909294) {
                        var10 = -0.09673022;
                    } else {
                        var10 = -0.0055905622;
                    }
                }
            } else {
                if (input[2] < 5.0) {
                    if (input[5] < 53.92241) {
                        var10 = 0.10554556;
                    } else {
                        var10 = 0.025233833;
                    }
                } else {
                    if (input[6] < 8.334433) {
                        var10 = 0.022156542;
                    } else {
                        var10 = 0.06881535;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[0] < 33.0) {
                    if (input[5] < 39.01941) {
                        var10 = -0.09131461;
                    } else {
                        var10 = -0.016986314;
                    }
                } else {
                    if (input[3] < 1.21875) {
                        var10 = -0.1137802;
                    } else {
                        var10 = -0.020407414;
                    }
                }
            } else {
                if (input[0] < 130.0) {
                    if (input[6] < 3.4033217) {
                        var10 = -0.03750971;
                    } else {
                        var10 = 0.0035654071;
                    }
                } else {
                    if (input[6] < 6.348692) {
                        var10 = -0.07882618;
                    } else {
                        var10 = -0.03489597;
                    }
                }
            }
        }
    } else {
        if (input[5] < 59.871376) {
            if (input[2] < 23.0) {
                if (input[6] < 32.525105) {
                    if (input[0] < 7.0) {
                        var10 = 0.0994417;
                    } else {
                        var10 = 0.006280796;
                    }
                } else {
                    if (input[5] < 22.98294) {
                        var10 = 0.11642625;
                    } else {
                        var10 = 0.098561615;
                    }
                }
            } else {
                if (input[6] < 227.90053) {
                    if (input[6] < 221.21031) {
                        var10 = 0.07528986;
                    } else {
                        var10 = 0.0013122285;
                    }
                } else {
                    if (input[0] < 88.0) {
                        var10 = 0.104090355;
                    } else {
                        var10 = 0.00094209955;
                    }
                }
            }
        } else {
            if (input[6] < 49.92579) {
                if (input[0] < 8.0) {
                    if (input[5] < 193.84048) {
                        var10 = 0.10066521;
                    } else {
                        var10 = 0.059003044;
                    }
                } else {
                    if (input[3] < 0.28125) {
                        var10 = 0.01826107;
                    } else {
                        var10 = 0.052252155;
                    }
                }
            } else {
                if (input[3] < 0.51428574) {
                    if (input[3] < 0.48) {
                        var10 = 0.068213694;
                    } else {
                        var10 = -0.0018425313;
                    }
                } else {
                    if (input[0] < 41.0) {
                        var10 = 0.101177566;
                    } else {
                        var10 = 0.01551487;
                    }
                }
            }
        }
    }
    var var11;
    if (input[6] < 21.065683) {
        if (input[0] < 7.0) {
            if (input[2] < 56.0) {
                if (input[6] < 6.9755206) {
                    if (input[6] < 0.024780093) {
                        var11 = -0.093081474;
                    } else {
                        var11 = 0.038828503;
                    }
                } else {
                    if (input[0] < 3.0) {
                        var11 = 0.090866804;
                    } else {
                        var11 = 0.043780845;
                    }
                }
            } else {
                if (input[6] < 4.4514236) {
                    if (input[5] < 0.32644677) {
                        var11 = 0.01966539;
                    } else {
                        var11 = -0.06483454;
                    }
                } else {
                    if (input[1] < 16.923077) {
                        var11 = 0.102872804;
                    } else {
                        var11 = 0.009149778;
                    }
                }
            }
        } else {
            if (input[6] < 1.5466666) {
                if (input[2] < 71.0) {
                    if (input[5] < 46.25734) {
                        var11 = -0.098424286;
                    } else {
                        var11 = -0.059572686;
                    }
                } else {
                    var11 = -0.11629529;
                }
            } else {
                if (input[0] < 25.0) {
                    if (input[2] < 2.0) {
                        var11 = -0.05481806;
                    } else {
                        var11 = 0.020955687;
                    }
                } else {
                    if (input[6] < 12.119641) {
                        var11 = -0.045006998;
                    } else {
                        var11 = -0.0036853463;
                    }
                }
            }
        }
    } else {
        if (input[5] < 59.871376) {
            if (input[2] < 21.0) {
                if (input[5] < 2.374942) {
                    if (input[6] < 46.118702) {
                        var11 = 0.10582675;
                    } else {
                        var11 = 0.115110576;
                    }
                } else {
                    if (input[6] < 31.297916) {
                        var11 = 0.06490901;
                    } else {
                        var11 = 0.10390945;
                    }
                }
            } else {
                if (input[6] < 143.42854) {
                    if (input[6] < 32.525105) {
                        var11 = 0.023822175;
                    } else {
                        var11 = 0.0693705;
                    }
                } else {
                    if (input[0] < 88.0) {
                        var11 = 0.09669826;
                    } else {
                        var11 = 0.008494887;
                    }
                }
            }
        } else {
            if (input[6] < 73.38485) {
                if (input[0] < 8.0) {
                    if (input[2] < 31.0) {
                        var11 = 0.085860945;
                    } else {
                        var11 = 0.03653957;
                    }
                } else {
                    if (input[1] < 65.0) {
                        var11 = 0.023116248;
                    } else {
                        var11 = 0.049286634;
                    }
                }
            } else {
                if (input[3] < 0.51428574) {
                    if (input[0] < 119.0) {
                        var11 = 0.07089335;
                    } else {
                        var11 = 0.03669874;
                    }
                } else {
                    if (input[2] < 43.0) {
                        var11 = 0.09840064;
                    } else {
                        var11 = -0.0060818233;
                    }
                }
            }
        }
    }
    var var12;
    if (input[6] < 21.065683) {
        if (input[0] < 13.0) {
            if (input[5] < 0.09741898) {
                if (input[6] < 4.4514236) {
                    if (input[1] < 16.923077) {
                        var12 = 0.057746764;
                    } else {
                        var12 = 0.007250245;
                    }
                } else {
                    if (input[2] < 14.0) {
                        var12 = 0.09748188;
                    } else {
                        var12 = 0.053337682;
                    }
                }
            } else {
                if (input[2] < 50.0) {
                    if (input[6] < 1.147037) {
                        var12 = -0.04115434;
                    } else {
                        var12 = 0.042805452;
                    }
                } else {
                    if (input[6] < 4.4514236) {
                        var12 = -0.05047765;
                    } else {
                        var12 = 0.007814235;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[2] < 59.0) {
                    if (input[0] < 40.0) {
                        var12 = -0.028788252;
                    } else {
                        var12 = -0.09204388;
                    }
                } else {
                    if (input[1] < 33.548386) {
                        var12 = -0.028720576;
                    } else {
                        var12 = -0.107180074;
                    }
                }
            } else {
                if (input[0] < 136.0) {
                    if (input[1] < 13.333333) {
                        var12 = -0.07059958;
                    } else {
                        var12 = -0.0048929364;
                    }
                } else {
                    if (input[6] < 6.348692) {
                        var12 = -0.071026355;
                    } else {
                        var12 = -0.029848099;
                    }
                }
            }
        }
    } else {
        if (input[5] < 59.871376) {
            if (input[2] < 23.0) {
                if (input[5] < 2.374942) {
                    if (input[6] < 46.118702) {
                        var12 = 0.102706425;
                    } else {
                        var12 = 0.11238219;
                    }
                } else {
                    if (input[6] < 32.525105) {
                        var12 = 0.061463296;
                    } else {
                        var12 = 0.10055405;
                    }
                }
            } else {
                if (input[6] < 227.90053) {
                    if (input[6] < 221.21031) {
                        var12 = 0.06648041;
                    } else {
                        var12 = -0.006581429;
                    }
                } else {
                    if (input[0] < 88.0) {
                        var12 = 0.095935926;
                    } else {
                        var12 = 0.0003684411;
                    }
                }
            }
        } else {
            if (input[6] < 61.82693) {
                if (input[0] < 8.0) {
                    if (input[2] < 31.0) {
                        var12 = 0.080656484;
                    } else {
                        var12 = 0.020633662;
                    }
                } else {
                    if (input[3] < 0.28125) {
                        var12 = 0.020051768;
                    } else {
                        var12 = 0.05054071;
                    }
                }
            } else {
                if (input[3] < 0.51428574) {
                    if (input[0] < 4.0) {
                        var12 = 0.08739524;
                    } else {
                        var12 = 0.055270266;
                    }
                } else {
                    if (input[2] < 43.0) {
                        var12 = 0.094682805;
                    } else {
                        var12 = 0.0075958483;
                    }
                }
            }
        }
    }
    var var13;
    if (input[6] < 21.065683) {
        if (input[0] < 7.0) {
            if (input[6] < 8.939711) {
                if (input[5] < 0.012766204) {
                    if (input[2] < 19.0) {
                        var13 = 0.07621916;
                    } else {
                        var13 = 0.022521107;
                    }
                } else {
                    if (input[6] < 1.147037) {
                        var13 = -0.043639667;
                    } else {
                        var13 = 0.016916407;
                    }
                }
            } else {
                if (input[5] < 0.32644677) {
                    if (input[4] < 1.0) {
                        var13 = 0.09183671;
                    } else {
                        var13 = -0.04356705;
                    }
                } else {
                    if (input[2] < 50.0) {
                        var13 = 0.062312443;
                    } else {
                        var13 = 0.0081187105;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[2] < 59.0) {
                    if (input[0] < 33.0) {
                        var13 = -0.027259408;
                    } else {
                        var13 = -0.08656527;
                    }
                } else {
                    if (input[0] < 10.0) {
                        var13 = -0.025091259;
                    } else {
                        var13 = -0.10572932;
                    }
                }
            } else {
                if (input[6] < 5.050463) {
                    if (input[0] < 189.0) {
                        var13 = -0.032777105;
                    } else {
                        var13 = -0.078606926;
                    }
                } else {
                    if (input[0] < 116.0) {
                        var13 = 0.006151249;
                    } else {
                        var13 = -0.030400118;
                    }
                }
            }
        }
    } else {
        if (input[5] < 59.871376) {
            if (input[2] < 21.0) {
                if (input[5] < 2.374942) {
                    if (input[6] < 50.335415) {
                        var13 = 0.102073945;
                    } else {
                        var13 = 0.11054029;
                    }
                } else {
                    if (input[6] < 31.297916) {
                        var13 = 0.056989696;
                    } else {
                        var13 = 0.09720759;
                    }
                }
            } else {
                if (input[6] < 143.42854) {
                    if (input[6] < 32.525105) {
                        var13 = 0.016434146;
                    } else {
                        var13 = 0.06104842;
                    }
                } else {
                    if (input[0] < 88.0) {
                        var13 = 0.088965945;
                    } else {
                        var13 = 0.007584629;
                    }
                }
            }
        } else {
            if (input[6] < 73.38485) {
                if (input[0] < 5.0) {
                    if (input[2] < 61.0) {
                        var13 = 0.08652859;
                    } else {
                        var13 = 0.018296681;
                    }
                } else {
                    if (input[3] < 0.28125) {
                        var13 = 0.023287315;
                    } else {
                        var13 = 0.047601342;
                    }
                }
            } else {
                if (input[2] < 42.0) {
                    if (input[1] < 13.846154) {
                        var13 = 0.05372565;
                    } else {
                        var13 = 0.08502942;
                    }
                } else {
                    if (input[1] < 76.55173) {
                        var13 = 0.022979325;
                    } else {
                        var13 = 0.06492465;
                    }
                }
            }
        }
    }
    var var14;
    if (input[6] < 23.146805) {
        if (input[0] < 13.0) {
            if (input[5] < 0.09741898) {
                if (input[6] < 5.050463) {
                    if (input[1] < 16.923077) {
                        var14 = 0.05301239;
                    } else {
                        var14 = 0.004701251;
                    }
                } else {
                    if (input[2] < 14.0) {
                        var14 = 0.09343663;
                    } else {
                        var14 = 0.047742106;
                    }
                }
            } else {
                if (input[2] < 41.0) {
                    if (input[6] < 1.147037) {
                        var14 = -0.032322932;
                    } else {
                        var14 = 0.038857136;
                    }
                } else {
                    if (input[6] < 2.9577432) {
                        var14 = -0.050270837;
                    } else {
                        var14 = 0.000981036;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[2] < 59.0) {
                    if (input[0] < 33.0) {
                        var14 = -0.015541732;
                    } else {
                        var14 = -0.08283623;
                    }
                } else {
                    if (input[1] < 33.548386) {
                        var14 = -0.04572983;
                    } else {
                        var14 = -0.10377546;
                    }
                }
            } else {
                if (input[6] < 8.334433) {
                    if (input[1] < 16.923077) {
                        var14 = -0.088888556;
                    } else {
                        var14 = -0.032228645;
                    }
                } else {
                    if (input[1] < 70.0) {
                        var14 = -0.01792578;
                    } else {
                        var14 = 0.01378909;
                    }
                }
            }
        }
    } else {
        if (input[5] < 59.871376) {
            if (input[2] < 21.0) {
                if (input[5] < 2.374942) {
                    if (input[6] < 28.304272) {
                        var14 = 0.07960102;
                    } else {
                        var14 = 0.107170224;
                    }
                } else {
                    if (input[6] < 153.46805) {
                        var14 = 0.08246698;
                    } else {
                        var14 = 0.101359926;
                    }
                }
            } else {
                if (input[6] < 151.44978) {
                    if (input[5] < 12.379942) {
                        var14 = 0.07068422;
                    } else {
                        var14 = 0.035796545;
                    }
                } else {
                    if (input[1] < 70.23256) {
                        var14 = 0.07567514;
                    } else {
                        var14 = 0.09905172;
                    }
                }
            }
        } else {
            if (input[6] < 49.92579) {
                if (input[0] < 7.0) {
                    if (input[5] < 243.39581) {
                        var14 = 0.0799982;
                    } else {
                        var14 = 0.025861328;
                    }
                } else {
                    if (input[3] < 0.28125) {
                        var14 = 0.010736159;
                    } else {
                        var14 = 0.04290378;
                    }
                }
            } else {
                if (input[3] < 0.51428574) {
                    if (input[3] < 0.48) {
                        var14 = 0.052234627;
                    } else {
                        var14 = -0.020252388;
                    }
                } else {
                    if (input[0] < 41.0) {
                        var14 = 0.08578045;
                    } else {
                        var14 = -0.0006400013;
                    }
                }
            }
        }
    }
    var var15;
    if (input[6] < 23.146805) {
        if (input[0] < 3.0) {
            if (input[6] < 1.04603) {
                if (input[5] < 0.013518519) {
                    if (input[3] < 0.00094577554) {
                        var15 = 0.036334794;
                    } else {
                        var15 = -0.061004627;
                    }
                } else {
                    if (input[3] < 2.1176472) {
                        var15 = -0.09785002;
                    } else {
                        var15 = -0.00052153337;
                    }
                }
            } else {
                if (input[2] < 22.0) {
                    if (input[6] < 6.9755206) {
                        var15 = 0.050168503;
                    } else {
                        var15 = 0.08746826;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var15 = 0.037950046;
                    } else {
                        var15 = -0.040558226;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[2] < 16.0) {
                    if (input[0] < 30.0) {
                        var15 = 0.012769498;
                    } else {
                        var15 = -0.09687766;
                    }
                } else {
                    if (input[2] < 71.0) {
                        var15 = -0.07526055;
                    } else {
                        var15 = -0.10803758;
                    }
                }
            } else {
                if (input[0] < 136.0) {
                    if (input[6] < 7.9778123) {
                        var15 = -0.016040308;
                    } else {
                        var15 = 0.013776885;
                    }
                } else {
                    if (input[5] < 265.80545) {
                        var15 = 0.002324772;
                    } else {
                        var15 = -0.05213626;
                    }
                }
            }
        }
    } else {
        if (input[5] < 59.871376) {
            if (input[2] < 21.0) {
                if (input[5] < 2.374942) {
                    if (input[6] < 28.304272) {
                        var15 = 0.0763697;
                    } else {
                        var15 = 0.10507005;
                    }
                } else {
                    if (input[6] < 153.46805) {
                        var15 = 0.07901218;
                    } else {
                        var15 = 0.09865563;
                    }
                }
            } else {
                if (input[6] < 151.44978) {
                    if (input[5] < 12.379942) {
                        var15 = 0.066938765;
                    } else {
                        var15 = 0.03306925;
                    }
                } else {
                    if (input[1] < 70.23256) {
                        var15 = 0.07197836;
                    } else {
                        var15 = 0.09584086;
                    }
                }
            }
        } else {
            if (input[6] < 73.38485) {
                if (input[0] < 8.0) {
                    if (input[2] < 27.0) {
                        var15 = 0.071237616;
                    } else {
                        var15 = 0.026159069;
                    }
                } else {
                    if (input[1] < 13.404255) {
                        var15 = -0.0069707856;
                    } else {
                        var15 = 0.029765258;
                    }
                }
            } else {
                if (input[2] < 70.0) {
                    if (input[3] < 0.95454544) {
                        var15 = 0.060055938;
                    } else {
                        var15 = 0.089481264;
                    }
                } else {
                    if (input[1] < 70.7563) {
                        var15 = -0.01612265;
                    } else {
                        var15 = 0.047321174;
                    }
                }
            }
        }
    }
    var var16;
    if (input[6] < 23.146805) {
        if (input[0] < 17.0) {
            if (input[6] < 2.6481366) {
                if (input[2] < 56.0) {
                    if (input[6] < 0.024780093) {
                        var16 = -0.09534274;
                    } else {
                        var16 = 0.014987885;
                    }
                } else {
                    if (input[1] < 88.78788) {
                        var16 = -0.06347586;
                    } else {
                        var16 = 0.014773659;
                    }
                }
            } else {
                if (input[0] < 3.0) {
                    if (input[2] < 27.0) {
                        var16 = 0.07593904;
                    } else {
                        var16 = 0.024353957;
                    }
                } else {
                    if (input[5] < 79.07286) {
                        var16 = 0.0009932811;
                    } else {
                        var16 = 0.03642368;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[2] < 59.0) {
                    if (input[0] < 33.0) {
                        var16 = 0.004588842;
                    } else {
                        var16 = -0.07569459;
                    }
                } else {
                    if (input[1] < 33.548386) {
                        var16 = -0.025941316;
                    } else {
                        var16 = -0.0996156;
                    }
                }
            } else {
                if (input[6] < 10.015231) {
                    if (input[1] < 129.5) {
                        var16 = -0.038021352;
                    } else {
                        var16 = 0.0010314428;
                    }
                } else {
                    if (input[1] < 73.333336) {
                        var16 = -0.021222452;
                    } else {
                        var16 = 0.024060855;
                    }
                }
            }
        }
    } else {
        if (input[5] < 48.956215) {
            if (input[2] < 23.0) {
                if (input[5] < 2.374942) {
                    if (input[6] < 28.304272) {
                        var16 = 0.073197775;
                    } else {
                        var16 = 0.10297692;
                    }
                } else {
                    if (input[6] < 32.525105) {
                        var16 = 0.04733533;
                    } else {
                        var16 = 0.09009926;
                    }
                }
            } else {
                if (input[6] < 281.2305) {
                    if (input[2] < 67.0) {
                        var16 = 0.05525125;
                    } else {
                        var16 = 0.010405805;
                    }
                } else {
                    if (input[2] < 61.0) {
                        var16 = 0.101921394;
                    } else {
                        var16 = 0.063452445;
                    }
                }
            }
        } else {
            if (input[5] < 148.84981) {
                if (input[3] < 0.95454544) {
                    if (input[6] < 83.09079) {
                        var16 = 0.025752097;
                    } else {
                        var16 = 0.06301319;
                    }
                } else {
                    if (input[1] < 50.27027) {
                        var16 = 0.080007896;
                    } else {
                        var16 = 0.11010227;
                    }
                }
            } else {
                if (input[2] < 65.0) {
                    if (input[5] < 296.66913) {
                        var16 = 0.045116164;
                    } else {
                        var16 = -0.006362074;
                    }
                } else {
                    if (input[1] < 53.913044) {
                        var16 = -0.043389767;
                    } else {
                        var16 = 0.02878024;
                    }
                }
            }
        }
    }
    var var17;
    if (input[6] < 37.20434) {
        if (input[0] < 5.0) {
            if (input[2] < 5.0) {
                if (input[6] < 3.9893517) {
                    if (input[6] < 3.4033217) {
                        var17 = 0.026940003;
                    } else {
                        var17 = -0.12149741;
                    }
                } else {
                    if (input[5] < 53.92241) {
                        var17 = 0.08553933;
                    } else {
                        var17 = 0.032400705;
                    }
                }
            } else {
                if (input[6] < 8.334433) {
                    if (input[4] < 1.0) {
                        var17 = 0.008605642;
                    } else {
                        var17 = -0.05766782;
                    }
                } else {
                    if (input[2] < 61.0) {
                        var17 = 0.047263663;
                    } else {
                        var17 = -0.028309548;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[0] < 33.0) {
                    if (input[5] < 39.01941) {
                        var17 = -0.066914216;
                    } else {
                        var17 = 0.0073179104;
                    }
                } else {
                    if (input[6] < 0.84034723) {
                        var17 = -0.098438025;
                    } else {
                        var17 = -0.059809506;
                    }
                }
            } else {
                if (input[6] < 13.951493) {
                    if (input[0] < 49.0) {
                        var17 = -0.0023066215;
                    } else {
                        var17 = -0.03639839;
                    }
                } else {
                    if (input[3] < 0.15490533) {
                        var17 = -0.0033421682;
                    } else {
                        var17 = 0.024673348;
                    }
                }
            }
        }
    } else {
        if (input[5] < 21.605915) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var17 = 0.10204444;
                    } else {
                        var17 = 0.07837085;
                    }
                } else {
                    if (input[2] < 9.0) {
                        var17 = 0.08445477;
                    } else {
                        var17 = 0.09979694;
                    }
                }
            } else {
                if (input[2] < 67.0) {
                    if (input[2] < 26.0) {
                        var17 = 0.013707891;
                    } else {
                        var17 = 0.07598189;
                    }
                } else {
                    if (input[6] < 227.90053) {
                        var17 = -0.07085305;
                    } else {
                        var17 = 0.04942409;
                    }
                }
            }
        } else {
            if (input[5] < 138.78784) {
                if (input[3] < 0.8181818) {
                    if (input[6] < 279.02167) {
                        var17 = 0.053325612;
                    } else {
                        var17 = 0.09986951;
                    }
                } else {
                    if (input[0] < 24.0) {
                        var17 = 0.08837365;
                    } else {
                        var17 = 0.0036979725;
                    }
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[1] < 14.0625) {
                        var17 = 0.034281425;
                    } else {
                        var17 = 0.06621025;
                    }
                } else {
                    if (input[1] < 11.860465) {
                        var17 = -0.031854562;
                    } else {
                        var17 = 0.030402754;
                    }
                }
            }
        }
    }
    var var18;
    if (input[6] < 37.20434) {
        if (input[0] < 5.0) {
            if (input[2] < 5.0) {
                if (input[6] < 4.4514236) {
                    if (input[5] < 0.0071643516) {
                        var18 = 0.042455655;
                    } else {
                        var18 = -0.00040073064;
                    }
                } else {
                    if (input[5] < 53.92241) {
                        var18 = 0.08291955;
                    } else {
                        var18 = 0.028430615;
                    }
                }
            } else {
                if (input[6] < 8.334433) {
                    if (input[1] < 90.21164) {
                        var18 = 0.0048778607;
                    } else {
                        var18 = -0.0785174;
                    }
                } else {
                    if (input[2] < 61.0) {
                        var18 = 0.04385005;
                    } else {
                        var18 = -0.025508774;
                    }
                }
            }
        } else {
            if (input[6] < 1.04603) {
                if (input[2] < 71.0) {
                    if (input[6] < 0.024780093) {
                        var18 = -0.08747145;
                    } else {
                        var18 = -0.042220168;
                    }
                } else {
                    if (input[6] < 0.97333336) {
                        var18 = -0.10637715;
                    } else {
                        var18 = -0.02133846;
                    }
                }
            } else {
                if (input[6] < 13.951493) {
                    if (input[0] < 85.0) {
                        var18 = -0.005205545;
                    } else {
                        var18 = -0.038414057;
                    }
                } else {
                    if (input[5] < 4.902662) {
                        var18 = 0.10994365;
                    } else {
                        var18 = 0.008295452;
                    }
                }
            }
        }
    } else {
        if (input[5] < 21.605915) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var18 = 0.100275256;
                    } else {
                        var18 = 0.07548019;
                    }
                } else {
                    if (input[2] < 9.0) {
                        var18 = 0.08159627;
                    } else {
                        var18 = 0.09766859;
                    }
                }
            } else {
                if (input[2] < 67.0) {
                    if (input[2] < 26.0) {
                        var18 = 0.01255843;
                    } else {
                        var18 = 0.072591886;
                    }
                } else {
                    if (input[6] < 256.34695) {
                        var18 = -0.055833925;
                    } else {
                        var18 = 0.05181483;
                    }
                }
            }
        } else {
            if (input[5] < 138.78784) {
                if (input[3] < 0.8181818) {
                    if (input[6] < 279.02167) {
                        var18 = 0.049937677;
                    } else {
                        var18 = 0.09742186;
                    }
                } else {
                    if (input[5] < 24.600336) {
                        var18 = 0.034168858;
                    } else {
                        var18 = 0.08743438;
                    }
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[2] < 58.0) {
                        var18 = 0.055389185;
                    } else {
                        var18 = 0.0036881843;
                    }
                } else {
                    if (input[2] < 12.0) {
                        var18 = -0.015835838;
                    } else {
                        var18 = 0.02928478;
                    }
                }
            }
        }
    }
    var var19;
    if (input[6] < 38.357895) {
        if (input[0] < 5.0) {
            if (input[2] < 3.0) {
                if (input[6] < 2.043345) {
                    if (input[6] < 1.5466666) {
                        var19 = 0.009331024;
                    } else {
                        var19 = -0.09097299;
                    }
                } else {
                    if (input[5] < 53.92241) {
                        var19 = 0.07892985;
                    } else {
                        var19 = 0.0118194055;
                    }
                }
            } else {
                if (input[6] < 8.562743) {
                    if (input[4] < 1.0) {
                        var19 = 0.009654476;
                    } else {
                        var19 = -0.047802035;
                    }
                } else {
                    if (input[5] < 0.32644677) {
                        var19 = 0.060775943;
                    } else {
                        var19 = 0.023303723;
                    }
                }
            }
        } else {
            if (input[2] < 71.0) {
                if (input[6] < 2.6481366) {
                    if (input[5] < 153.05817) {
                        var19 = -0.05586944;
                    } else {
                        var19 = -0.015085118;
                    }
                } else {
                    if (input[1] < 137.75862) {
                        var19 = -0.0018227453;
                    } else {
                        var19 = 0.04257479;
                    }
                }
            } else {
                if (input[6] < 3.0935764) {
                    if (input[6] < 0.97333336) {
                        var19 = -0.10503965;
                    } else {
                        var19 = -0.07688889;
                    }
                } else {
                    if (input[0] < 211.0) {
                        var19 = 0.025149137;
                    } else {
                        var19 = -0.086351685;
                    }
                }
            }
        }
    } else {
        if (input[5] < 20.38529) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var19 = 0.098601095;
                    } else {
                        var19 = 0.07260287;
                    }
                } else {
                    if (input[0] < 7.0) {
                        var19 = 0.08078024;
                    } else {
                        var19 = 0.10223464;
                    }
                }
            } else {
                if (input[2] < 65.0) {
                    if (input[2] < 26.0) {
                        var19 = 0.004741407;
                    } else {
                        var19 = 0.07164227;
                    }
                } else {
                    if (input[6] < 227.90053) {
                        var19 = -0.04580229;
                    } else {
                        var19 = 0.035628892;
                    }
                }
            }
        } else {
            if (input[5] < 138.78784) {
                if (input[3] < 0.95454544) {
                    if (input[6] < 279.02167) {
                        var19 = 0.048080906;
                    } else {
                        var19 = 0.09306751;
                    }
                } else {
                    if (input[1] < 35.192307) {
                        var19 = 0.06570519;
                    } else {
                        var19 = 0.09786363;
                    }
                }
            } else {
                if (input[0] < 4.0) {
                    if (input[2] < 66.0) {
                        var19 = 0.07644014;
                    } else {
                        var19 = -0.028062714;
                    }
                } else {
                    if (input[1] < 13.888889) {
                        var19 = -0.0006983616;
                    } else {
                        var19 = 0.03263314;
                    }
                }
            }
        }
    }
    var var20;
    if (input[6] < 38.357895) {
        if (input[0] < 14.0) {
            if (input[2] < 38.0) {
                if (input[5] < 0.93733793) {
                    if (input[6] < 6.9755206) {
                        var20 = 0.029982368;
                    } else {
                        var20 = 0.07506018;
                    }
                } else {
                    if (input[6] < 2.3790162) {
                        var20 = -0.009197238;
                    } else {
                        var20 = 0.03137991;
                    }
                }
            } else {
                if (input[6] < 4.4514236) {
                    if (input[1] < 25.319149) {
                        var20 = 0.013334437;
                    } else {
                        var20 = -0.04677083;
                    }
                } else {
                    if (input[1] < 75.18519) {
                        var20 = 0.019179247;
                    } else {
                        var20 = -0.05399507;
                    }
                }
            }
        } else {
            if (input[6] < 1.2749422) {
                if (input[2] < 71.0) {
                    if (input[5] < 282.88336) {
                        var20 = -0.07542416;
                    } else {
                        var20 = -0.02517739;
                    }
                } else {
                    if (input[3] < 0.004938272) {
                        var20 = -0.053250488;
                    } else {
                        var20 = -0.10409837;
                    }
                }
            } else {
                if (input[0] < 136.0) {
                    if (input[1] < 13.333333) {
                        var20 = -0.058080394;
                    } else {
                        var20 = 0.005880376;
                    }
                } else {
                    if (input[1] < 110.0) {
                        var20 = -0.040932797;
                    } else {
                        var20 = -0.003021429;
                    }
                }
            }
        }
    } else {
        if (input[5] < 20.38529) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var20 = 0.09691466;
                    } else {
                        var20 = 0.06973519;
                    }
                } else {
                    if (input[0] < 7.0) {
                        var20 = 0.07800895;
                    } else {
                        var20 = 0.10062255;
                    }
                }
            } else {
                if (input[2] < 65.0) {
                    if (input[2] < 26.0) {
                        var20 = 0.00431892;
                    } else {
                        var20 = 0.06839679;
                    }
                } else {
                    if (input[6] < 256.34695) {
                        var20 = -0.036881942;
                    } else {
                        var20 = 0.037096545;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 173.79958) {
                    if (input[0] < 4.0) {
                        var20 = 0.05785925;
                    } else {
                        var20 = 0.023142586;
                    }
                } else {
                    if (input[5] < 56.879375) {
                        var20 = 0.07701822;
                    } else {
                        var20 = 0.047217663;
                    }
                }
            } else {
                if (input[5] < 265.80545) {
                    if (input[3] < 4.8) {
                        var20 = 0.08262058;
                    } else {
                        var20 = -0.0010556477;
                    }
                } else {
                    if (input[5] < 279.6869) {
                        var20 = -0.08171566;
                    } else {
                        var20 = 0.06848654;
                    }
                }
            }
        }
    }
    var var21;
    if (input[6] < 38.357895) {
        if (input[6] < 1.04603) {
            if (input[2] < 56.0) {
                if (input[0] < 33.0) {
                    if (input[5] < 39.01941) {
                        var21 = -0.027998624;
                    } else {
                        var21 = 0.05925346;
                    }
                } else {
                    if (input[1] < 55.0) {
                        var21 = -0.098044306;
                    } else {
                        var21 = -0.030107645;
                    }
                }
            } else {
                if (input[2] < 71.0) {
                    if (input[1] < 25.319149) {
                        var21 = 0.005708248;
                    } else {
                        var21 = -0.065608256;
                    }
                } else {
                    if (input[6] < 0.97333336) {
                        var21 = -0.10277813;
                    } else {
                        var21 = -0.009707527;
                    }
                }
            }
        } else {
            if (input[0] < 3.0) {
                if (input[2] < 17.0) {
                    if (input[6] < 6.9755206) {
                        var21 = 0.03410434;
                    } else {
                        var21 = 0.07201596;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var21 = 0.027046585;
                    } else {
                        var21 = -0.034436263;
                    }
                }
            } else {
                if (input[0] < 136.0) {
                    if (input[1] < 137.75862) {
                        var21 = 0.0019474274;
                    } else {
                        var21 = 0.059248056;
                    }
                } else {
                    if (input[0] < 149.0) {
                        var21 = -0.07750457;
                    } else {
                        var21 = -0.01997136;
                    }
                }
            }
        }
    } else {
        if (input[5] < 20.38529) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var21 = 0.095242254;
                    } else {
                        var21 = 0.066876106;
                    }
                } else {
                    if (input[0] < 7.0) {
                        var21 = 0.07523077;
                    } else {
                        var21 = 0.099062026;
                    }
                }
            } else {
                if (input[2] < 65.0) {
                    if (input[2] < 26.0) {
                        var21 = 0.003933013;
                    } else {
                        var21 = 0.065196425;
                    }
                } else {
                    if (input[6] < 227.90053) {
                        var21 = -0.03706032;
                    } else {
                        var21 = 0.0312902;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 173.79958) {
                    if (input[0] < 4.0) {
                        var21 = 0.054505493;
                    } else {
                        var21 = 0.021153469;
                    }
                } else {
                    if (input[6] < 279.02167) {
                        var21 = 0.048081636;
                    } else {
                        var21 = 0.08861453;
                    }
                }
            } else {
                if (input[5] < 265.80545) {
                    if (input[3] < 4.8) {
                        var21 = 0.07969432;
                    } else {
                        var21 = -0.0009729592;
                    }
                } else {
                    if (input[5] < 279.6869) {
                        var21 = -0.07421679;
                    } else {
                        var21 = 0.06631329;
                    }
                }
            }
        }
    }
    var var22;
    if (input[6] < 38.357895) {
        if (input[6] < 1.04603) {
            if (input[2] < 56.0) {
                if (input[6] < 0.024780093) {
                    if (input[1] < 15.151515) {
                        var22 = 0.047379006;
                    } else {
                        var22 = -0.10464694;
                    }
                } else {
                    if (input[0] < 33.0) {
                        var22 = 0.007936587;
                    } else {
                        var22 = -0.06439652;
                    }
                }
            } else {
                if (input[2] < 71.0) {
                    if (input[1] < 25.319149) {
                        var22 = 0.005267113;
                    } else {
                        var22 = -0.06231755;
                    }
                } else {
                    if (input[6] < 0.97333336) {
                        var22 = -0.10163297;
                    } else {
                        var22 = -0.009100943;
                    }
                }
            }
        } else {
            if (input[0] < 3.0) {
                if (input[2] < 17.0) {
                    if (input[6] < 6.9755206) {
                        var22 = 0.031383272;
                    } else {
                        var22 = 0.068876944;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var22 = 0.024713611;
                    } else {
                        var22 = -0.030835202;
                    }
                }
            } else {
                if (input[6] < 13.951493) {
                    if (input[0] < 48.0) {
                        var22 = -0.00006484622;
                    } else {
                        var22 = -0.028087461;
                    }
                } else {
                    if (input[5] < 11.522361) {
                        var22 = 0.057861406;
                    } else {
                        var22 = 0.009134716;
                    }
                }
            }
        }
    } else {
        if (input[5] < 20.38529) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var22 = 0.09356916;
                    } else {
                        var22 = 0.06402664;
                    }
                } else {
                    if (input[0] < 7.0) {
                        var22 = 0.07244121;
                    } else {
                        var22 = 0.097536616;
                    }
                }
            } else {
                if (input[2] < 65.0) {
                    if (input[2] < 26.0) {
                        var22 = 0.0035806864;
                    } else {
                        var22 = 0.06204011;
                    }
                } else {
                    if (input[1] < 97.5) {
                        var22 = -0.018605797;
                    } else {
                        var22 = 0.05940622;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 173.79958) {
                    if (input[0] < 4.0) {
                        var22 = 0.05125883;
                    } else {
                        var22 = 0.019312983;
                    }
                } else {
                    if (input[6] < 279.02167) {
                        var22 = 0.044968497;
                    } else {
                        var22 = 0.08623683;
                    }
                }
            } else {
                if (input[5] < 265.80545) {
                    if (input[1] < 35.192307) {
                        var22 = 0.053717323;
                    } else {
                        var22 = 0.08910212;
                    }
                } else {
                    if (input[5] < 279.6869) {
                        var22 = -0.06756513;
                    } else {
                        var22 = 0.06424926;
                    }
                }
            }
        }
    }
    var var23;
    if (input[6] < 38.357895) {
        if (input[2] < 71.0) {
            if (input[0] < 3.0) {
                if (input[6] < 14.07463) {
                    if (input[6] < 1.04603) {
                        var23 = -0.025188902;
                    } else {
                        var23 = 0.02737166;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var23 = 0.070864044;
                    } else {
                        var23 = 0.01935706;
                    }
                }
            } else {
                if (input[6] < 7.9778123) {
                    if (input[6] < 0.024780093) {
                        var23 = -0.08240536;
                    } else {
                        var23 = -0.013291587;
                    }
                } else {
                    if (input[0] < 27.0) {
                        var23 = 0.020131994;
                    } else {
                        var23 = -0.0049939095;
                    }
                }
            }
        } else {
            if (input[6] < 1.909294) {
                if (input[3] < 0.0056179776) {
                    if (input[0] < 206.0) {
                        var23 = 0.089504786;
                    } else {
                        var23 = -0.09050514;
                    }
                } else {
                    var23 = -0.10153132;
                }
            } else {
                if (input[5] < 327.10483) {
                    if (input[2] < 72.0) {
                        var23 = -0.043407798;
                    } else {
                        var23 = 0.048193336;
                    }
                } else {
                    if (input[0] < 147.0) {
                        var23 = -0.008905779;
                    } else {
                        var23 = -0.09497797;
                    }
                }
            }
        }
    } else {
        if (input[5] < 20.38529) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var23 = 0.091882244;
                    } else {
                        var23 = 0.061189886;
                    }
                } else {
                    if (input[0] < 7.0) {
                        var23 = 0.069638364;
                    } else {
                        var23 = 0.096031785;
                    }
                }
            } else {
                if (input[6] < 52.07853) {
                    if (input[0] < 2.0) {
                        var23 = 0.046246998;
                    } else {
                        var23 = -0.12991132;
                    }
                } else {
                    if (input[3] < 0.00094577554) {
                        var23 = 0.033856463;
                    } else {
                        var23 = 0.08034905;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 173.79958) {
                    if (input[0] < 4.0) {
                        var23 = 0.04812034;
                    } else {
                        var23 = 0.017613305;
                    }
                } else {
                    if (input[5] < 56.879375) {
                        var23 = 0.0687671;
                    } else {
                        var23 = 0.037656363;
                    }
                }
            } else {
                if (input[5] < 265.80545) {
                    if (input[1] < 46.0) {
                        var23 = 0.05568253;
                    } else {
                        var23 = 0.093096316;
                    }
                } else {
                    if (input[5] < 279.6869) {
                        var23 = -0.061640542;
                    } else {
                        var23 = 0.062285043;
                    }
                }
            }
        }
    }
    var var24;
    if (input[6] < 38.357895) {
        if (input[2] < 71.0) {
            if (input[5] < 0.11446759) {
                if (input[6] < 14.07463) {
                    if (input[6] < 0.044097222) {
                        var24 = -0.051951267;
                    } else {
                        var24 = 0.029915784;
                    }
                } else {
                    if (input[5] < 0.076203704) {
                        var24 = 0.07307274;
                    } else {
                        var24 = -0.08474799;
                    }
                }
            } else {
                if (input[6] < 6.05044) {
                    if (input[6] < 0.024780093) {
                        var24 = -0.07695263;
                    } else {
                        var24 = -0.013830001;
                    }
                } else {
                    if (input[0] < 27.0) {
                        var24 = 0.018021904;
                    } else {
                        var24 = -0.004010175;
                    }
                }
            }
        } else {
            if (input[6] < 1.909294) {
                if (input[3] < 0.0056179776) {
                    if (input[0] < 205.0) {
                        var24 = 0.087619826;
                    } else {
                        var24 = -0.08889281;
                    }
                } else {
                    var24 = -0.10009586;
                }
            } else {
                if (input[5] < 282.88336) {
                    if (input[6] < 5.6118865) {
                        var24 = 0.062053498;
                    } else {
                        var24 = -0.07074893;
                    }
                } else {
                    if (input[6] < 6.05044) {
                        var24 = -0.09305828;
                    } else {
                        var24 = 0.021901457;
                    }
                }
            }
        }
    } else {
        if (input[5] < 18.88405) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var24 = 0.09016972;
                    } else {
                        var24 = 0.05837034;
                    }
                } else {
                    if (input[2] < 9.0) {
                        var24 = 0.06208533;
                    } else {
                        var24 = 0.08865221;
                    }
                }
            } else {
                if (input[5] < 2.9723842) {
                    if (input[1] < 53.913044) {
                        var24 = 0.062316447;
                    } else {
                        var24 = -0.022737682;
                    }
                } else {
                    if (input[3] < 0.00094577554) {
                        var24 = -0.046805542;
                    } else {
                        var24 = 0.07085057;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 173.79958) {
                    if (input[0] < 4.0) {
                        var24 = 0.043374952;
                    } else {
                        var24 = 0.016304279;
                    }
                } else {
                    if (input[6] < 285.07483) {
                        var24 = 0.03945857;
                    } else {
                        var24 = 0.08330092;
                    }
                }
            } else {
                if (input[3] < 4.8) {
                    if (input[5] < 265.80545) {
                        var24 = 0.07212061;
                    } else {
                        var24 = -0.009756814;
                    }
                } else {
                    if (input[1] < 15.151515) {
                        var24 = -0.077120915;
                    } else {
                        var24 = 0.04393252;
                    }
                }
            }
        }
    }
    var var25;
    if (input[6] < 38.357895) {
        if (input[2] < 71.0) {
            if (input[5] < 0.11446759) {
                if (input[6] < 14.07463) {
                    if (input[6] < 0.044097222) {
                        var25 = -0.048118953;
                    } else {
                        var25 = 0.027462145;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var25 = 0.07437452;
                    } else {
                        var25 = -0.021250283;
                    }
                }
            } else {
                if (input[6] < 6.05044) {
                    if (input[6] < 0.024780093) {
                        var25 = -0.07381344;
                    } else {
                        var25 = -0.012513029;
                    }
                } else {
                    if (input[0] < 27.0) {
                        var25 = 0.016356748;
                    } else {
                        var25 = -0.0036107327;
                    }
                }
            }
        } else {
            if (input[6] < 1.909294) {
                if (input[3] < 0.0056179776) {
                    if (input[3] < 0.0047318614) {
                        var25 = -0.08879045;
                    } else {
                        var25 = 0.07966192;
                    }
                } else {
                    var25 = -0.09868302;
                }
            } else {
                if (input[5] < 327.10483) {
                    if (input[2] < 72.0) {
                        var25 = -0.039693072;
                    } else {
                        var25 = 0.0428421;
                    }
                } else {
                    if (input[0] < 147.0) {
                        var25 = -0.003735562;
                    } else {
                        var25 = -0.0896646;
                    }
                }
            }
        }
    } else {
        if (input[5] < 18.88405) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[4] < 1.0) {
                        var25 = 0.08949625;
                    } else {
                        var25 = 0.06884506;
                    }
                } else {
                    if (input[2] < 9.0) {
                        var25 = 0.059213687;
                    } else {
                        var25 = 0.086705595;
                    }
                }
            } else {
                if (input[6] < 281.2305) {
                    if (input[2] < 26.0) {
                        var25 = -0.037266184;
                    } else {
                        var25 = 0.034307055;
                    }
                } else {
                    if (input[2] < 61.0) {
                        var25 = 0.08095103;
                    } else {
                        var25 = 0.007613424;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 173.79958) {
                    if (input[1] < 65.0) {
                        var25 = 0.00999453;
                    } else {
                        var25 = 0.026351323;
                    }
                } else {
                    if (input[6] < 285.07483) {
                        var25 = 0.036702376;
                    } else {
                        var25 = 0.08099068;
                    }
                }
            } else {
                if (input[1] < 46.0) {
                    if (input[3] < 1.4666667) {
                        var25 = 0.0024147795;
                    } else {
                        var25 = 0.066530615;
                    }
                } else {
                    if (input[2] < 27.0) {
                        var25 = 0.090249464;
                    } else {
                        var25 = -0.010901395;
                    }
                }
            }
        }
    }
    var var26;
    if (input[6] < 38.357895) {
        if (input[2] < 71.0) {
            if (input[0] < 3.0) {
                if (input[6] < 14.07463) {
                    if (input[1] < 20.37037) {
                        var26 = 0.028966114;
                    } else {
                        var26 = -0.0066366317;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var26 = 0.06303464;
                    } else {
                        var26 = 0.01474339;
                    }
                }
            } else {
                if (input[6] < 13.951493) {
                    if (input[0] < 50.0) {
                        var26 = -0.0015642903;
                    } else {
                        var26 = -0.024353838;
                    }
                } else {
                    if (input[5] < 11.522361) {
                        var26 = 0.051131543;
                    } else {
                        var26 = 0.0065414547;
                    }
                }
            }
        } else {
            if (input[6] < 1.909294) {
                if (input[3] < 0.0056179776) {
                    if (input[0] < 205.0) {
                        var26 = 0.08316269;
                    } else {
                        var26 = -0.085940264;
                    }
                } else {
                    var26 = -0.09728166;
                }
            } else {
                if (input[5] < 327.10483) {
                    if (input[2] < 72.0) {
                        var26 = -0.036976766;
                    } else {
                        var26 = 0.038673606;
                    }
                } else {
                    if (input[6] < 6.348692) {
                        var26 = -0.08110862;
                    } else {
                        var26 = 0.013335361;
                    }
                }
            }
        }
    } else {
        if (input[5] < 18.88405) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var26 = 0.086655624;
                    } else {
                        var26 = 0.051265437;
                    }
                } else {
                    if (input[2] < 9.0) {
                        var26 = 0.05635469;
                    } else {
                        var26 = 0.0847252;
                    }
                }
            } else {
                if (input[6] < 322.04886) {
                    if (input[5] < 2.9723842) {
                        var26 = 0.04139945;
                    } else {
                        var26 = -0.0038305197;
                    }
                } else {
                    if (input[2] < 70.0) {
                        var26 = 0.09298696;
                    } else {
                        var26 = 0.024421047;
                    }
                }
            }
        } else {
            if (input[3] < 0.95454544) {
                if (input[6] < 108.160034) {
                    if (input[5] < 39.01941) {
                        var26 = -0.049410123;
                    } else {
                        var26 = 0.01477118;
                    }
                } else {
                    if (input[2] < 42.0) {
                        var26 = 0.043422792;
                    } else {
                        var26 = 0.0174925;
                    }
                }
            } else {
                if (input[1] < 46.0) {
                    if (input[3] < 1.4666667) {
                        var26 = 0.0021937923;
                    } else {
                        var26 = 0.06360543;
                    }
                } else {
                    if (input[2] < 27.0) {
                        var26 = 0.088172585;
                    } else {
                        var26 = -0.010192537;
                    }
                }
            }
        }
    }
    var var27;
    if (input[6] < 38.357895) {
        if (input[6] < 1.04603) {
            if (input[2] < 56.0) {
                if (input[0] < 33.0) {
                    if (input[5] < 39.01941) {
                        var27 = -0.022584165;
                    } else {
                        var27 = 0.059398748;
                    }
                } else {
                    if (input[1] < 55.0) {
                        var27 = -0.092922896;
                    } else {
                        var27 = -0.015132233;
                    }
                }
            } else {
                if (input[2] < 71.0) {
                    if (input[5] < 10.99706) {
                        var27 = -0.07615703;
                    } else {
                        var27 = -0.034793362;
                    }
                } else {
                    if (input[6] < 0.97333336) {
                        var27 = -0.09656431;
                    } else {
                        var27 = 0.010964484;
                    }
                }
            }
        } else {
            if (input[5] < 1.7756366) {
                if (input[2] < 17.0) {
                    if (input[6] < 6.9755206) {
                        var27 = 0.029454175;
                    } else {
                        var27 = 0.059019815;
                    }
                } else {
                    if (input[1] < 75.18519) {
                        var27 = 0.01807345;
                    } else {
                        var27 = -0.09038393;
                    }
                }
            } else {
                if (input[6] < 5.050463) {
                    if (input[2] < 48.0) {
                        var27 = 0.0025773714;
                    } else {
                        var27 = -0.02747162;
                    }
                } else {
                    if (input[0] < 3.0) {
                        var27 = 0.044061333;
                    } else {
                        var27 = 0.0023199306;
                    }
                }
            }
        }
    } else {
        if (input[5] < 7.4992476) {
            if (input[2] < 23.0) {
                if (input[6] < 46.294792) {
                    if (input[5] < 0.13873842) {
                        var27 = 0.0684118;
                    } else {
                        var27 = 0.019318795;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var27 = 0.0858401;
                    } else {
                        var27 = 0.06702342;
                    }
                }
            } else {
                if (input[6] < 281.2305) {
                    if (input[6] < 277.0429) {
                        var27 = 0.029192021;
                    } else {
                        var27 = -0.101732634;
                    }
                } else {
                    if (input[2] < 62.0) {
                        var27 = 0.07778301;
                    } else {
                        var27 = 0.015284429;
                    }
                }
            }
        } else {
            if (input[5] < 138.78784) {
                if (input[2] < 42.0) {
                    if (input[1] < 16.25) {
                        var27 = 0.024970543;
                    } else {
                        var27 = 0.057158705;
                    }
                } else {
                    if (input[1] < 80.79832) {
                        var27 = -0.011717915;
                    } else {
                        var27 = 0.04256193;
                    }
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[1] < 14.0625) {
                        var27 = 0.0097643575;
                    } else {
                        var27 = 0.042041056;
                    }
                } else {
                    if (input[2] < 12.0) {
                        var27 = -0.031915013;
                    } else {
                        var27 = 0.011528007;
                    }
                }
            }
        }
    }
    var var28;
    if (input[6] < 38.357895) {
        if (input[2] < 71.0) {
            if (input[5] < 0.32644677) {
                if (input[6] < 14.07463) {
                    if (input[1] < 90.21164) {
                        var28 = 0.021586448;
                    } else {
                        var28 = -0.042355385;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var28 = 0.067172475;
                    } else {
                        var28 = -0.01638006;
                    }
                }
            } else {
                if (input[6] < 2.6481366) {
                    if (input[2] < 56.0) {
                        var28 = -0.00037315986;
                    } else {
                        var28 = -0.0342075;
                    }
                } else {
                    if (input[1] < 137.75862) {
                        var28 = 0.0012597971;
                    } else {
                        var28 = 0.039756086;
                    }
                }
            }
        } else {
            if (input[6] < 1.909294) {
                if (input[3] < 0.0056179776) {
                    if (input[3] < 0.0047318614) {
                        var28 = -0.084618695;
                    } else {
                        var28 = 0.081901215;
                    }
                } else {
                    var28 = -0.094899856;
                }
            } else {
                if (input[5] < 282.88336) {
                    if (input[6] < 5.6118865) {
                        var28 = 0.05781458;
                    } else {
                        var28 = -0.06607164;
                    }
                } else {
                    if (input[6] < 6.05044) {
                        var28 = -0.08473948;
                    } else {
                        var28 = 0.02297024;
                    }
                }
            }
        }
    } else {
        if (input[5] < 7.4992476) {
            if (input[2] < 14.0) {
                if (input[6] < 46.294792) {
                    if (input[5] < 0.13873842) {
                        var28 = 0.06961914;
                    } else {
                        var28 = 0.011304154;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var28 = 0.08548216;
                    } else {
                        var28 = 0.062569536;
                    }
                }
            } else {
                if (input[6] < 307.16742) {
                    if (input[3] < 0.00094577554) {
                        var28 = 0.02119965;
                    } else {
                        var28 = 0.063747056;
                    }
                } else {
                    if (input[1] < 52.857143) {
                        var28 = 0.08901449;
                    } else {
                        var28 = 0.04020291;
                    }
                }
            }
        } else {
            if (input[5] < 138.78784) {
                if (input[2] < 42.0) {
                    if (input[1] < 16.25) {
                        var28 = 0.02299742;
                    } else {
                        var28 = 0.054145515;
                    }
                } else {
                    if (input[1] < 80.79832) {
                        var28 = -0.01048076;
                    } else {
                        var28 = 0.039731454;
                    }
                }
            } else {
                if (input[0] < 4.0) {
                    if (input[2] < 34.0) {
                        var28 = 0.06519797;
                    } else {
                        var28 = -0.01228927;
                    }
                } else {
                    if (input[1] < 65.0) {
                        var28 = -0.0013088606;
                    } else {
                        var28 = 0.022158757;
                    }
                }
            }
        }
    }
    var var29;
    if (input[6] < 34.034004) {
        if (input[2] < 71.0) {
            if (input[5] < 0.11446759) {
                if (input[6] < 5.050463) {
                    if (input[5] < 0.034375) {
                        var29 = -0.004731359;
                    } else {
                        var29 = 0.04027307;
                    }
                } else {
                    if (input[2] < 14.0) {
                        var29 = 0.05398321;
                    } else {
                        var29 = 0.013015896;
                    }
                }
            } else {
                if (input[1] < 134.24603) {
                    if (input[0] < 96.0) {
                        var29 = 0.0011045275;
                    } else {
                        var29 = -0.0239325;
                    }
                } else {
                    if (input[5] < 305.88507) {
                        var29 = 0.0046505085;
                    } else {
                        var29 = 0.07601072;
                    }
                }
            }
        } else {
            if (input[6] < 0.97333336) {
                var29 = -0.094511785;
            } else {
                if (input[0] < 211.0) {
                    if (input[3] < 0.03663004) {
                        var29 = 0.055193704;
                    } else {
                        var29 = -0.054411232;
                    }
                } else {
                    if (input[5] < 272.4803) {
                        var29 = -0.0029153356;
                    } else {
                        var29 = -0.08322762;
                    }
                }
            }
        }
    } else {
        if (input[5] < 20.38529) {
            if (input[2] < 23.0) {
                if (input[5] < 2.7428472) {
                    if (input[2] < 14.0) {
                        var29 = 0.081116505;
                    } else {
                        var29 = 0.03860072;
                    }
                } else {
                    if (input[1] < 60.35294) {
                        var29 = 0.05026257;
                    } else {
                        var29 = 0.081637725;
                    }
                }
            } else {
                if (input[2] < 67.0) {
                    if (input[2] < 26.0) {
                        var29 = -0.014127982;
                    } else {
                        var29 = 0.047162544;
                    }
                } else {
                    if (input[6] < 256.34695) {
                        var29 = -0.05837887;
                    } else {
                        var29 = 0.031638782;
                    }
                }
            }
        } else {
            if (input[4] < 1.0) {
                if (input[6] < 200.94424) {
                    if (input[3] < 0.85106385) {
                        var29 = 0.01688987;
                    } else {
                        var29 = 0.052599866;
                    }
                } else {
                    if (input[1] < 120.71429) {
                        var29 = 0.06759862;
                    } else {
                        var29 = -0.01557187;
                    }
                }
            } else {
                if (input[2] < 13.0) {
                    if (input[0] < 73.0) {
                        var29 = -0.027319465;
                    } else {
                        var29 = 0.089339554;
                    }
                } else {
                    if (input[0] < 84.0) {
                        var29 = 0.02365941;
                    } else {
                        var29 = -0.0063790516;
                    }
                }
            }
        }
    }
    var var30;
    if (input[5] < 1.7756366) {
        if (input[6] < 15.815127) {
            if (input[6] < 1.04603) {
                if (input[0] < 2.0) {
                    if (input[2] < 56.0) {
                        var30 = 0.008126304;
                    } else {
                        var30 = -0.07087385;
                    }
                } else {
                    if (input[3] < 3.6) {
                        var30 = -0.08803764;
                    } else {
                        var30 = 0.0015907026;
                    }
                }
            } else {
                if (input[6] < 15.317882) {
                    if (input[2] < 17.0) {
                        var30 = 0.035929587;
                    } else {
                        var30 = 0.003355609;
                    }
                } else {
                    if (input[1] < 15.151515) {
                        var30 = -0.1400153;
                    } else {
                        var30 = 0.012874352;
                    }
                }
            }
        } else {
            if (input[2] < 14.0) {
                if (input[6] < 50.335415) {
                    if (input[4] < 1.0) {
                        var30 = 0.06462407;
                    } else {
                        var30 = 0.010684003;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var30 = 0.08553826;
                    } else {
                        var30 = 0.061644424;
                    }
                }
            } else {
                if (input[1] < 162.08122) {
                    if (input[2] < 16.0) {
                        var30 = -0.023963394;
                    } else {
                        var30 = 0.04371009;
                    }
                } else {
                    var30 = -0.09561729;
                }
            }
        }
    } else {
        if (input[6] < 19.153357) {
            if (input[2] < 74.0) {
                if (input[6] < 0.024780093) {
                    if (input[1] < 43.333332) {
                        var30 = 0.042432617;
                    } else {
                        var30 = -0.099482015;
                    }
                } else {
                    if (input[5] < 79.07286) {
                        var30 = -0.018809503;
                    } else {
                        var30 = -0.000016683302;
                    }
                }
            } else {
                if (input[1] < 52.0) {
                    var30 = -0.013358498;
                } else {
                    var30 = -0.1007504;
                }
            }
        } else {
            if (input[5] < 138.78784) {
                if (input[2] < 37.0) {
                    if (input[6] < 285.07483) {
                        var30 = 0.036690395;
                    } else {
                        var30 = 0.08443331;
                    }
                } else {
                    if (input[5] < 14.000196) {
                        var30 = -0.05865193;
                    } else {
                        var30 = 0.019709332;
                    }
                }
            } else {
                if (input[2] < 65.0) {
                    if (input[1] < 13.888889) {
                        var30 = -0.0023762628;
                    } else {
                        var30 = 0.02292769;
                    }
                } else {
                    if (input[1] < 64.0) {
                        var30 = -0.043347266;
                    } else {
                        var30 = 0.01003676;
                    }
                }
            }
        }
    }
    var var31;
    if (input[5] < 1.7756366) {
        if (input[6] < 15.815127) {
            if (input[6] < 1.04603) {
                if (input[5] < 0.04133102) {
                    if (input[2] < 20.0) {
                        var31 = 0.024401605;
                    } else {
                        var31 = -0.030010864;
                    }
                } else {
                    if (input[1] < 29.0) {
                        var31 = -0.101103984;
                    } else {
                        var31 = -0.037752107;
                    }
                }
            } else {
                if (input[6] < 15.317882) {
                    if (input[2] < 17.0) {
                        var31 = 0.03320257;
                    } else {
                        var31 = 0.0030295185;
                    }
                } else {
                    if (input[1] < 15.151515) {
                        var31 = -0.12412417;
                    } else {
                        var31 = 0.012265348;
                    }
                }
            }
        } else {
            if (input[2] < 14.0) {
                if (input[6] < 50.335415) {
                    if (input[4] < 1.0) {
                        var31 = 0.061961453;
                    } else {
                        var31 = 0.009816502;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var31 = 0.08380567;
                    } else {
                        var31 = 0.05904547;
                    }
                }
            } else {
                if (input[1] < 53.913044) {
                    if (input[2] < 16.0) {
                        var31 = -0.045130014;
                    } else {
                        var31 = 0.04952702;
                    }
                } else {
                    if (input[6] < 224.04472) {
                        var31 = -0.08018895;
                    } else {
                        var31 = 0.03914487;
                    }
                }
            }
        }
    } else {
        if (input[6] < 19.153357) {
            if (input[2] < 74.0) {
                if (input[6] < 0.024780093) {
                    if (input[1] < 43.333332) {
                        var31 = 0.03820611;
                    } else {
                        var31 = -0.09818301;
                    }
                } else {
                    if (input[1] < 70.0) {
                        var31 = -0.011511628;
                    } else {
                        var31 = 0.0060485443;
                    }
                }
            } else {
                if (input[1] < 52.0) {
                    var31 = -0.012734461;
                } else {
                    var31 = -0.09967409;
                }
            }
        } else {
            if (input[5] < 115.22868) {
                if (input[6] < 285.07483) {
                    if (input[2] < 42.0) {
                        var31 = 0.03395695;
                    } else {
                        var31 = 0.0087699415;
                    }
                } else {
                    if (input[2] < 61.0) {
                        var31 = 0.08186453;
                    } else {
                        var31 = 0.010064105;
                    }
                }
            } else {
                if (input[0] < 14.0) {
                    if (input[3] < 0.51428574) {
                        var31 = 0.015251711;
                    } else {
                        var31 = 0.044291057;
                    }
                } else {
                    if (input[1] < 64.0) {
                        var31 = -0.011440701;
                    } else {
                        var31 = 0.01413309;
                    }
                }
            }
        }
    }
    var var32;
    if (input[5] < 1.7756366) {
        if (input[6] < 15.815127) {
            if (input[6] < 0.024780093) {
                if (input[1] < 20.37037) {
                    var32 = -0.014018421;
                } else {
                    var32 = -0.08913977;
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[5] < 1.1739699) {
                        var32 = 0.013429128;
                    } else {
                        var32 = 0.06624137;
                    }
                } else {
                    if (input[2] < 11.0) {
                        var32 = 0.05805787;
                    } else {
                        var32 = -0.06160009;
                    }
                }
            }
        } else {
            if (input[2] < 14.0) {
                if (input[6] < 50.335415) {
                    if (input[4] < 1.0) {
                        var32 = 0.059276994;
                    } else {
                        var32 = 0.009013518;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var32 = 0.08200254;
                    } else {
                        var32 = 0.05643288;
                    }
                }
            } else {
                if (input[1] < 53.913044) {
                    if (input[2] < 16.0) {
                        var32 = -0.040187698;
                    } else {
                        var32 = 0.046644375;
                    }
                } else {
                    if (input[6] < 224.04472) {
                        var32 = -0.06965857;
                    } else {
                        var32 = 0.03711639;
                    }
                }
            }
        }
    } else {
        if (input[6] < 13.951493) {
            if (input[2] < 74.0) {
                if (input[0] < 50.0) {
                    if (input[5] < 29.015036) {
                        var32 = -0.022849957;
                    } else {
                        var32 = 0.014939866;
                    }
                } else {
                    if (input[1] < 111.31579) {
                        var32 = -0.033059936;
                    } else {
                        var32 = 0.010440803;
                    }
                }
            } else {
                if (input[1] < 52.0) {
                    var32 = -0.012139595;
                } else {
                    var32 = -0.09859781;
                }
            }
        } else {
            if (input[6] < 155.51677) {
                if (input[0] < 4.0) {
                    if (input[6] < 132.58797) {
                        var32 = 0.03776459;
                    } else {
                        var32 = -0.034936156;
                    }
                } else {
                    if (input[5] < 4.902662) {
                        var32 = 0.075450584;
                    } else {
                        var32 = 0.005818037;
                    }
                }
            } else {
                if (input[3] < 0.4477612) {
                    if (input[6] < 279.02167) {
                        var32 = 0.012417537;
                    } else {
                        var32 = 0.049247146;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var32 = 0.07827552;
                    } else {
                        var32 = 0.028581051;
                    }
                }
            }
        }
    }
    var var33;
    if (input[5] < 1.7756366) {
        if (input[6] < 15.815127) {
            if (input[6] < 1.04603) {
                if (input[2] < 56.0) {
                    if (input[6] < 0.0048958333) {
                        var33 = -0.08759531;
                    } else {
                        var33 = 0.0024178687;
                    }
                } else {
                    var33 = -0.091430016;
                }
            } else {
                if (input[6] < 15.317882) {
                    if (input[2] < 17.0) {
                        var33 = 0.029290771;
                    } else {
                        var33 = 0.002030584;
                    }
                } else {
                    if (input[1] < 15.151515) {
                        var33 = -0.11179157;
                    } else {
                        var33 = 0.010643461;
                    }
                }
            }
        } else {
            if (input[2] < 14.0) {
                if (input[6] < 50.335415) {
                    if (input[4] < 1.0) {
                        var33 = 0.056579407;
                    } else {
                        var33 = 0.008271334;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var33 = 0.08012505;
                    } else {
                        var33 = 0.05381635;
                    }
                }
            } else {
                if (input[1] < 162.08122) {
                    if (input[0] < 2.0) {
                        var33 = 0.02232744;
                    } else {
                        var33 = 0.07400313;
                    }
                } else {
                    var33 = -0.07992045;
                }
            }
        }
    } else {
        if (input[6] < 19.153357) {
            if (input[2] < 71.0) {
                if (input[5] < 79.07286) {
                    if (input[1] < 18.372093) {
                        var33 = 0.018031092;
                    } else {
                        var33 = -0.024108252;
                    }
                } else {
                    if (input[3] < 1.0714285) {
                        var33 = -0.0021428813;
                    } else {
                        var33 = 0.06869741;
                    }
                }
            } else {
                if (input[6] < 0.97333336) {
                    if (input[1] < 152.0) {
                        var33 = -0.095900714;
                    } else {
                        var33 = -0.037728574;
                    }
                } else {
                    if (input[0] < 211.0) {
                        var33 = -0.004003539;
                    } else {
                        var33 = -0.062429376;
                    }
                }
            }
        } else {
            if (input[2] < 36.0) {
                if (input[6] < 155.51677) {
                    if (input[0] < 9.0) {
                        var33 = 0.026700228;
                    } else {
                        var33 = 0.009227701;
                    }
                } else {
                    if (input[1] < 17.291666) {
                        var33 = 0.008339485;
                    } else {
                        var33 = 0.06406809;
                    }
                }
            } else {
                if (input[1] < 82.5) {
                    if (input[0] < 75.0) {
                        var33 = 0.00024199458;
                    } else {
                        var33 = -0.045881733;
                    }
                } else {
                    if (input[0] < 290.0) {
                        var33 = 0.0146449525;
                    } else {
                        var33 = 0.060832907;
                    }
                }
            }
        }
    }
    var var34;
    if (input[5] < 1.7756366) {
        if (input[6] < 15.815127) {
            if (input[6] < 0.024780093) {
                if (input[1] < 20.37037) {
                    var34 = -0.012357389;
                } else {
                    var34 = -0.084244326;
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[1] < 90.21164) {
                        var34 = 0.017154662;
                    } else {
                        var34 = -0.040334947;
                    }
                } else {
                    if (input[2] < 11.0) {
                        var34 = 0.05400898;
                    } else {
                        var34 = -0.055196982;
                    }
                }
            }
        } else {
            if (input[2] < 10.0) {
                if (input[6] < 50.335415) {
                    if (input[4] < 1.0) {
                        var34 = 0.052773245;
                    } else {
                        var34 = 0.0064218766;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var34 = 0.08023426;
                    } else {
                        var34 = 0.0496126;
                    }
                }
            } else {
                if (input[6] < 322.04886) {
                    if (input[2] < 57.0) {
                        var34 = 0.010138221;
                    } else {
                        var34 = 0.04697604;
                    }
                } else {
                    if (input[1] < 58.57143) {
                        var34 = 0.08754929;
                    } else {
                        var34 = 0.0031487278;
                    }
                }
            }
        }
    } else {
        if (input[6] < 19.153357) {
            if (input[2] < 74.0) {
                if (input[0] < 116.0) {
                    if (input[5] < 79.07286) {
                        var34 = -0.015901985;
                    } else {
                        var34 = 0.009980711;
                    }
                } else {
                    if (input[1] < 111.31579) {
                        var34 = -0.034359638;
                    } else {
                        var34 = 0.011709995;
                    }
                }
            } else {
                if (input[1] < 52.857143) {
                    var34 = -0.014083492;
                } else {
                    var34 = -0.09686556;
                }
            }
        } else {
            if (input[2] < 36.0) {
                if (input[6] < 258.35382) {
                    if (input[1] < 13.846154) {
                        var34 = 0.00092531973;
                    } else {
                        var34 = 0.0265735;
                    }
                } else {
                    if (input[2] < 34.0) {
                        var34 = 0.06589889;
                    } else {
                        var34 = -0.04539437;
                    }
                }
            } else {
                if (input[1] < 82.5) {
                    if (input[5] < 8.031239) {
                        var34 = -0.13394883;
                    } else {
                        var34 = -0.0077912323;
                    }
                } else {
                    if (input[6] < 52.981064) {
                        var34 = 0.002032549;
                    } else {
                        var34 = 0.02745803;
                    }
                }
            }
        }
    }
    var var35;
    if (input[0] < 4.0) {
        if (input[6] < 30.384155) {
            if (input[1] < 90.21164) {
                if (input[6] < 5.050463) {
                    if (input[1] < 23.571428) {
                        var35 = 0.009134786;
                    } else {
                        var35 = -0.023891652;
                    }
                } else {
                    if (input[2] < 4.0) {
                        var35 = 0.0368224;
                    } else {
                        var35 = 0.01138731;
                    }
                }
            } else {
                if (input[3] < 2.1176472) {
                    if (input[1] < 176.0) {
                        var35 = -0.115348555;
                    } else {
                        var35 = 0.055761058;
                    }
                } else {
                    if (input[6] < 1.4011805) {
                        var35 = -0.008683058;
                    } else {
                        var35 = 0.085107066;
                    }
                }
            }
        } else {
            if (input[2] < 14.0) {
                if (input[5] < 2.032153) {
                    if (input[4] < 1.0) {
                        var35 = 0.072519474;
                    } else {
                        var35 = 0.040183462;
                    }
                } else {
                    if (input[2] < 2.0) {
                        var35 = 0.01218736;
                    } else {
                        var35 = 0.046492875;
                    }
                }
            } else {
                if (input[6] < 305.14197) {
                    if (input[5] < 13.181215) {
                        var35 = -0.0009618828;
                    } else {
                        var35 = 0.033748724;
                    }
                } else {
                    if (input[1] < 50.27027) {
                        var35 = 0.08560705;
                    } else {
                        var35 = -0.0019512164;
                    }
                }
            }
        }
    } else {
        if (input[6] < 83.09079) {
            if (input[6] < 0.024780093) {
                if (input[1] < 43.333332) {
                    if (input[5] < 8.489352) {
                        var35 = -0.0675286;
                    } else {
                        var35 = 0.08731288;
                    }
                } else {
                    var35 = -0.09771439;
                }
            } else {
                if (input[1] < 15.714286) {
                    if (input[2] < 12.0) {
                        var35 = -0.033452783;
                    } else {
                        var35 = 0.013844626;
                    }
                } else {
                    if (input[2] < 50.0) {
                        var35 = 0.012353522;
                    } else {
                        var35 = -0.0058308034;
                    }
                }
            }
        } else {
            if (input[2] < 42.0) {
                if (input[1] < 13.846154) {
                    if (input[5] < 72.99709) {
                        var35 = 0.07293659;
                    } else {
                        var35 = -0.02189718;
                    }
                } else {
                    if (input[6] < 268.13214) {
                        var35 = 0.04031233;
                    } else {
                        var35 = 0.07653909;
                    }
                }
            } else {
                if (input[1] < 76.55173) {
                    if (input[5] < 14.000196) {
                        var35 = -0.14893356;
                    } else {
                        var35 = -0.023118315;
                    }
                } else {
                    if (input[6] < 92.08866) {
                        var35 = -0.081768885;
                    } else {
                        var35 = 0.028058944;
                    }
                }
            }
        }
    }
    var var36;
    if (input[5] < 1.7756366) {
        if (input[6] < 15.815127) {
            if (input[6] < 0.024780093) {
                if (input[1] < 20.37037) {
                    var36 = -0.012181893;
                } else {
                    var36 = -0.08048224;
                }
            } else {
                if (input[6] < 15.317882) {
                    if (input[2] < 17.0) {
                        var36 = 0.021097684;
                    } else {
                        var36 = -0.0014412387;
                    }
                } else {
                    if (input[1] < 15.151515) {
                        var36 = -0.10492177;
                    } else {
                        var36 = 0.008554046;
                    }
                }
            }
        } else {
            if (input[2] < 10.0) {
                if (input[6] < 50.335415) {
                    if (input[4] < 1.0) {
                        var36 = 0.04698061;
                    } else {
                        var36 = 0.0025832509;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var36 = 0.07646647;
                    } else {
                        var36 = 0.044887688;
                    }
                }
            } else {
                if (input[6] < 322.04886) {
                    if (input[6] < 299.01215) {
                        var36 = 0.023756986;
                    } else {
                        var36 = -0.026255343;
                    }
                } else {
                    if (input[1] < 53.913044) {
                        var36 = 0.08424295;
                    } else {
                        var36 = 0.00517391;
                    }
                }
            }
        }
    } else {
        if (input[6] < 5.050463) {
            if (input[2] < 71.0) {
                if (input[5] < 46.25734) {
                    if (input[0] < 10.0) {
                        var36 = -0.009030382;
                    } else {
                        var36 = -0.05803392;
                    }
                } else {
                    if (input[0] < 32.0) {
                        var36 = 0.033949368;
                    } else {
                        var36 = -0.017145677;
                    }
                }
            } else {
                if (input[2] < 74.0) {
                    if (input[1] < 116.38596) {
                        var36 = -0.06375773;
                    } else {
                        var36 = 0.0075152167;
                    }
                } else {
                    var36 = -0.09609942;
                }
            }
        } else {
            if (input[6] < 155.51677) {
                if (input[0] < 3.0) {
                    if (input[6] < 97.08869) {
                        var36 = 0.046461355;
                    } else {
                        var36 = -0.029285848;
                    }
                } else {
                    if (input[1] < 68.333336) {
                        var36 = -0.0027372225;
                    } else {
                        var36 = 0.012227028;
                    }
                }
            } else {
                if (input[3] < 0.55813956) {
                    if (input[1] < 70.35714) {
                        var36 = 0.003373657;
                    } else {
                        var36 = 0.033727188;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var36 = 0.0684559;
                    } else {
                        var36 = 0.026795909;
                    }
                }
            }
        }
    }
    var var37;
    if (input[5] < 1.7756366) {
        if (input[6] < 32.525105) {
            if (input[4] < 1.0) {
                if (input[6] < 8.939711) {
                    if (input[5] < 1.3380092) {
                        var37 = -0.0024240734;
                    } else {
                        var37 = 0.0972272;
                    }
                } else {
                    if (input[5] < 1.3380092) {
                        var37 = 0.033577185;
                    } else {
                        var37 = -0.041314296;
                    }
                }
            } else {
                if (input[2] < 37.0) {
                    if (input[6] < 1.147037) {
                        var37 = -0.046997648;
                    } else {
                        var37 = 0.033149824;
                    }
                } else {
                    if (input[6] < 9.055278) {
                        var37 = -0.012198783;
                    } else {
                        var37 = -0.14887036;
                    }
                }
            }
        } else {
            if (input[2] < 10.0) {
                if (input[6] < 225.60623) {
                    if (input[4] < 1.0) {
                        var37 = 0.0628337;
                    } else {
                        var37 = 0.031478684;
                    }
                } else {
                    var37 = 0.08571735;
                }
            } else {
                if (input[1] < 53.913044) {
                    if (input[1] < 10.379746) {
                        var37 = 0.012342243;
                    } else {
                        var37 = 0.062010743;
                    }
                } else {
                    if (input[6] < 224.04472) {
                        var37 = -0.06346821;
                    } else {
                        var37 = 0.04866874;
                    }
                }
            }
        }
    } else {
        if (input[6] < 13.951493) {
            if (input[0] < 290.0) {
                if (input[6] < 0.024780093) {
                    if (input[1] < 43.333332) {
                        var37 = 0.035931252;
                    } else {
                        var37 = -0.09535931;
                    }
                } else {
                    if (input[1] < 123.333336) {
                        var37 = -0.006026435;
                    } else {
                        var37 = 0.023684857;
                    }
                }
            } else {
                if (input[1] < 106.666664) {
                    if (input[5] < 314.67422) {
                        var37 = -0.011556304;
                    } else {
                        var37 = -0.09505783;
                    }
                } else {
                    if (input[0] < 373.0) {
                        var37 = 0.03946678;
                    } else {
                        var37 = -0.06525927;
                    }
                }
            }
        } else {
            if (input[3] < 0.25) {
                if (input[0] < 7.0) {
                    if (input[6] < 92.08866) {
                        var37 = 0.033445887;
                    } else {
                        var37 = -0.0013772377;
                    }
                } else {
                    if (input[1] < 67.04225) {
                        var37 = -0.011600248;
                    } else {
                        var37 = 0.008847902;
                    }
                }
            } else {
                if (input[6] < 151.44978) {
                    if (input[0] < 159.0) {
                        var37 = 0.014392949;
                    } else {
                        var37 = -0.07879561;
                    }
                } else {
                    if (input[2] < 47.0) {
                        var37 = 0.055182308;
                    } else {
                        var37 = -0.05086989;
                    }
                }
            }
        }
    }
    var var38;
    if (input[5] < 1.7756366) {
        if (input[6] < 32.525105) {
            if (input[6] < 1.04603) {
                if (input[2] < 56.0) {
                    if (input[3] < 1.5384616) {
                        var38 = 0.01628473;
                    } else {
                        var38 = -0.036943167;
                    }
                } else {
                    var38 = -0.08783349;
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[1] < 40.588234) {
                        var38 = 0.010568781;
                    } else {
                        var38 = 0.03903639;
                    }
                } else {
                    if (input[6] < 7.5002313) {
                        var38 = 0.02385393;
                    } else {
                        var38 = -0.052179713;
                    }
                }
            }
        } else {
            if (input[2] < 10.0) {
                if (input[6] < 225.60623) {
                    if (input[4] < 1.0) {
                        var38 = 0.060296465;
                    } else {
                        var38 = 0.029325306;
                    }
                } else {
                    var38 = 0.08420818;
                }
            } else {
                if (input[1] < 53.913044) {
                    if (input[2] < 11.0) {
                        var38 = -0.073721305;
                    } else {
                        var38 = 0.03361838;
                    }
                } else {
                    if (input[3] < 0.55813956) {
                        var38 = -0.06455024;
                    } else {
                        var38 = 0.039136376;
                    }
                }
            }
        }
    } else {
        if (input[6] < 83.09079) {
            if (input[2] < 71.0) {
                if (input[0] < 3.0) {
                    if (input[6] < 2.6481366) {
                        var38 = -0.042163517;
                    } else {
                        var38 = 0.037513603;
                    }
                } else {
                    if (input[1] < 70.0) {
                        var38 = -0.0070717256;
                    } else {
                        var38 = 0.008208874;
                    }
                }
            } else {
                if (input[6] < 0.97333336) {
                    if (input[1] < 152.0) {
                        var38 = -0.093049794;
                    } else {
                        var38 = -0.02596016;
                    }
                } else {
                    if (input[0] < 211.0) {
                        var38 = 0.001472246;
                    } else {
                        var38 = -0.05643932;
                    }
                }
            }
        } else {
            if (input[2] < 70.0) {
                if (input[6] < 285.07483) {
                    if (input[6] < 89.50101) {
                        var38 = 0.07575201;
                    } else {
                        var38 = 0.018311156;
                    }
                } else {
                    if (input[3] < 0.00094577554) {
                        var38 = 0.032286383;
                    } else {
                        var38 = 0.08371269;
                    }
                }
            } else {
                if (input[1] < 70.7563) {
                    if (input[1] < 41.666668) {
                        var38 = 0.0033523042;
                    } else {
                        var38 = -0.094114296;
                    }
                } else {
                    if (input[0] < 114.0) {
                        var38 = 0.0317907;
                    } else {
                        var38 = -0.020239845;
                    }
                }
            }
        }
    }
    var var39;
    if (input[5] < 0.11446759) {
        if (input[6] < 32.525105) {
            if (input[6] < 5.050463) {
                if (input[5] < 0.034375) {
                    if (input[5] < 0.013518519) {
                        var39 = 0.006767915;
                    } else {
                        var39 = -0.0883198;
                    }
                } else {
                    if (input[6] < 0.10696759) {
                        var39 = -0.06501487;
                    } else {
                        var39 = 0.057684984;
                    }
                }
            } else {
                if (input[3] < 1.5272727) {
                    if (input[6] < 7.5002313) {
                        var39 = 0.045969013;
                    } else {
                        var39 = 0.0060449596;
                    }
                } else {
                    if (input[6] < 6.9755206) {
                        var39 = 0.005231518;
                    } else {
                        var39 = 0.08096496;
                    }
                }
            }
        } else {
            if (input[2] < 8.0) {
                if (input[6] < 256.34695) {
                    if (input[4] < 1.0) {
                        var39 = 0.060061324;
                    } else {
                        var39 = 0.025558366;
                    }
                } else {
                    if (input[1] < 80.2454) {
                        var39 = 0.09363541;
                    } else {
                        var39 = 0.009511194;
                    }
                }
            } else {
                if (input[6] < 317.06332) {
                    if (input[6] < 299.01215) {
                        var39 = 0.015942829;
                    } else {
                        var39 = -0.06113834;
                    }
                } else {
                    if (input[5] < 0.020787038) {
                        var39 = 0.0831265;
                    } else {
                        var39 = 0.0038478677;
                    }
                }
            }
        }
    } else {
        if (input[6] < 83.09079) {
            if (input[6] < 0.024780093) {
                if (input[1] < 43.333332) {
                    if (input[5] < 8.489352) {
                        var39 = -0.079715356;
                    } else {
                        var39 = 0.093455814;
                    }
                } else {
                    var39 = -0.09612735;
                }
            } else {
                if (input[0] < 17.0) {
                    if (input[5] < 82.66972) {
                        var39 = -0.0034298;
                    } else {
                        var39 = 0.01983823;
                    }
                } else {
                    if (input[1] < 67.04225) {
                        var39 = -0.018537646;
                    } else {
                        var39 = 0.0048141954;
                    }
                }
            }
        } else {
            if (input[5] < 2.374942) {
                if (input[2] < 25.0) {
                    if (input[5] < 0.1730324) {
                        var39 = 0.0294684;
                    } else {
                        var39 = 0.08894459;
                    }
                } else {
                    if (input[1] < 53.913044) {
                        var39 = 0.070556164;
                    } else {
                        var39 = -0.016972914;
                    }
                }
            } else {
                if (input[3] < 0.28125) {
                    if (input[5] < 13.181215) {
                        var39 = -0.04641976;
                    } else {
                        var39 = 0.008899905;
                    }
                } else {
                    if (input[2] < 23.0) {
                        var39 = 0.045134693;
                    } else {
                        var39 = 0.007074594;
                    }
                }
            }
        }
    }
    var var40;
    if (input[5] < 0.11446759) {
        if (input[6] < 14.07463) {
            if (input[5] < 0.052256946) {
                if (input[5] < 0.0071643516) {
                    if (input[4] < 1.0) {
                        var40 = 0.022085397;
                    } else {
                        var40 = -0.027071903;
                    }
                } else {
                    if (input[3] < 0.00094577554) {
                        var40 = -0.041263517;
                    } else {
                        var40 = 0.005795294;
                    }
                }
            } else {
                if (input[6] < 1.147037) {
                    if (input[1] < 70.23256) {
                        var40 = -0.06608965;
                    } else {
                        var40 = 0.026116813;
                    }
                } else {
                    if (input[5] < 0.09741898) {
                        var40 = 0.09054181;
                    } else {
                        var40 = 0.027519977;
                    }
                }
            }
        } else {
            if (input[2] < 8.0) {
                if (input[6] < 50.335415) {
                    if (input[3] < 2.0625) {
                        var40 = 0.025565717;
                    } else {
                        var40 = 0.08626135;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var40 = 0.070744395;
                    } else {
                        var40 = 0.03263278;
                    }
                }
            } else {
                if (input[6] < 317.06332) {
                    if (input[6] < 296.5802) {
                        var40 = 0.015302377;
                    } else {
                        var40 = -0.0494153;
                    }
                } else {
                    if (input[5] < 0.020787038) {
                        var40 = 0.081585735;
                    } else {
                        var40 = 0.0036595303;
                    }
                }
            }
        }
    } else {
        if (input[6] < 83.09079) {
            if (input[6] < 1.04603) {
                if (input[3] < 0.5) {
                    if (input[5] < 312.33087) {
                        var40 = -0.06840717;
                    } else {
                        var40 = -0.020420006;
                    }
                } else {
                    if (input[5] < 10.99706) {
                        var40 = -0.030703291;
                    } else {
                        var40 = 0.052750524;
                    }
                }
            } else {
                if (input[6] < 77.31866) {
                    if (input[6] < 75.37532) {
                        var40 = 0.0011743007;
                    } else {
                        var40 = 0.075281024;
                    }
                } else {
                    if (input[5] < 187.93571) {
                        var40 = -0.097622715;
                    } else {
                        var40 = 0.004261305;
                    }
                }
            }
        } else {
            if (input[5] < 2.374942) {
                if (input[2] < 25.0) {
                    if (input[5] < 0.1730324) {
                        var40 = 0.028110204;
                    } else {
                        var40 = 0.08764016;
                    }
                } else {
                    if (input[1] < 53.913044) {
                        var40 = 0.068727784;
                    } else {
                        var40 = -0.015844097;
                    }
                }
            } else {
                if (input[2] < 70.0) {
                    if (input[1] < 82.5) {
                        var40 = 0.014073498;
                    } else {
                        var40 = 0.045842152;
                    }
                } else {
                    if (input[1] < 70.7563) {
                        var40 = -0.046500634;
                    } else {
                        var40 = 0.0061379685;
                    }
                }
            }
        }
    }
    var var41;
    if (input[0] < 4.0) {
        if (input[6] < 30.384155) {
            if (input[1] < 90.21164) {
                if (input[6] < 8.939711) {
                    if (input[5] < 11.522361) {
                        var41 = -0.004479358;
                    } else {
                        var41 = 0.030330777;
                    }
                } else {
                    if (input[5] < 228.57191) {
                        var41 = 0.022693383;
                    } else {
                        var41 = -0.041672032;
                    }
                }
            } else {
                if (input[3] < 2.1176472) {
                    if (input[1] < 176.0) {
                        var41 = -0.10818672;
                    } else {
                        var41 = 0.05204128;
                    }
                } else {
                    if (input[6] < 1.4011805) {
                        var41 = -0.010367758;
                    } else {
                        var41 = 0.07953659;
                    }
                }
            }
        } else {
            if (input[2] < 14.0) {
                if (input[5] < 2.032153) {
                    if (input[3] < 1.9285715) {
                        var41 = 0.04720035;
                    } else {
                        var41 = 0.076035626;
                    }
                } else {
                    if (input[3] < 4.3636365) {
                        var41 = 0.027947983;
                    } else {
                        var41 = -0.051152665;
                    }
                }
            } else {
                if (input[6] < 305.14197) {
                    if (input[5] < 13.181215) {
                        var41 = -0.009657805;
                    } else {
                        var41 = 0.026897151;
                    }
                } else {
                    if (input[1] < 50.27027) {
                        var41 = 0.08107212;
                    } else {
                        var41 = -0.00422425;
                    }
                }
            }
        }
    } else {
        if (input[2] < 74.0) {
            if (input[1] < 70.0) {
                if (input[0] < 92.0) {
                    if (input[5] < 5.078322) {
                        var41 = 0.028959781;
                    } else {
                        var41 = -0.0026280165;
                    }
                } else {
                    if (input[3] < 0.14197531) {
                        var41 = -0.05652085;
                    } else {
                        var41 = -0.0016985711;
                    }
                }
            } else {
                if (input[2] < 22.0) {
                    if (input[6] < 2.3790162) {
                        var41 = -0.045097224;
                    } else {
                        var41 = 0.060450174;
                    }
                } else {
                    if (input[6] < 0.84034723) {
                        var41 = -0.04962392;
                    } else {
                        var41 = 0.007827009;
                    }
                }
            }
        } else {
            if (input[1] < 57.5) {
                var41 = -0.009085451;
            } else {
                var41 = -0.092766434;
            }
        }
    }
    var var42;
    if (input[5] < 0.11446759) {
        if (input[6] < 32.525105) {
            if (input[1] < 40.588234) {
                if (input[5] < 0.012766204) {
                    if (input[3] < 0.00094577554) {
                        var42 = 0.009304028;
                    } else {
                        var42 = 0.05178533;
                    }
                } else {
                    if (input[6] < 9.450081) {
                        var42 = -0.0382489;
                    } else {
                        var42 = 0.03237405;
                    }
                }
            } else {
                if (input[6] < 0.10696759) {
                    var42 = -0.061549205;
                } else {
                    if (input[6] < 6.05044) {
                        var42 = 0.073207915;
                    } else {
                        var42 = 0.034654282;
                    }
                }
            }
        } else {
            if (input[2] < 8.0) {
                if (input[6] < 256.34695) {
                    if (input[4] < 1.0) {
                        var42 = 0.052321434;
                    } else {
                        var42 = 0.017615234;
                    }
                } else {
                    if (input[1] < 80.2454) {
                        var42 = 0.091566615;
                    } else {
                        var42 = 0.0022465389;
                    }
                }
            } else {
                if (input[5] < 0.034375) {
                    if (input[6] < 317.06332) {
                        var42 = 0.010943114;
                    } else {
                        var42 = 0.0804021;
                    }
                } else {
                    if (input[5] < 0.041828703) {
                        var42 = -0.11818136;
                    } else {
                        var42 = 0.015629956;
                    }
                }
            }
        }
    } else {
        if (input[6] < 285.07483) {
            if (input[0] < 84.0) {
                if (input[6] < 83.09079) {
                    if (input[5] < 82.66972) {
                        var42 = -0.0076153236;
                    } else {
                        var42 = 0.008573793;
                    }
                } else {
                    if (input[5] < 2.374942) {
                        var42 = 0.073643796;
                    } else {
                        var42 = 0.012680686;
                    }
                }
            } else {
                if (input[1] < 110.0) {
                    if (input[5] < 309.0371) {
                        var42 = -0.005245802;
                    } else {
                        var42 = -0.03683985;
                    }
                } else {
                    if (input[5] < 305.88507) {
                        var42 = -0.0042481236;
                    } else {
                        var42 = 0.029406259;
                    }
                }
            }
        } else {
            if (input[2] < 61.0) {
                if (input[0] < 3.0) {
                    if (input[5] < 6.819259) {
                        var42 = 0.0712613;
                    } else {
                        var42 = -0.012623508;
                    }
                } else {
                    if (input[6] < 326.13168) {
                        var42 = 0.08942259;
                    } else {
                        var42 = 0.013056834;
                    }
                }
            } else {
                if (input[1] < 68.333336) {
                    if (input[6] < 309.04895) {
                        var42 = -0.17311113;
                    } else {
                        var42 = 0.009556083;
                    }
                } else {
                    if (input[3] < 0.052083332) {
                        var42 = 0.0821911;
                    } else {
                        var42 = 0.004274664;
                    }
                }
            }
        }
    }
    var var43;
    if (input[0] < 13.0) {
        if (input[6] < 32.525105) {
            if (input[5] < 72.99709) {
                if (input[2] < 3.0) {
                    if (input[5] < 53.92241) {
                        var43 = 0.02156941;
                    } else {
                        var43 = -0.106331386;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var43 = -0.0012356526;
                    } else {
                        var43 = -0.033838004;
                    }
                }
            } else {
                if (input[1] < 37.5) {
                    if (input[5] < 223.86206) {
                        var43 = 0.035980117;
                    } else {
                        var43 = -0.009213913;
                    }
                } else {
                    if (input[6] < 31.297916) {
                        var43 = 0.074899614;
                    } else {
                        var43 = -0.08710294;
                    }
                }
            }
        } else {
            if (input[5] < 22.98294) {
                if (input[2] < 23.0) {
                    if (input[3] < 2.4545455) {
                        var43 = 0.040005475;
                    } else {
                        var43 = 0.065806;
                    }
                } else {
                    if (input[0] < 7.0) {
                        var43 = -0.0031221283;
                    } else {
                        var43 = 0.072207905;
                    }
                }
            } else {
                if (input[2] < 10.0) {
                    if (input[6] < 234.9276) {
                        var43 = -0.015540301;
                    } else {
                        var43 = 0.04994018;
                    }
                } else {
                    if (input[2] < 17.0) {
                        var43 = 0.04893652;
                    } else {
                        var43 = 0.0072944895;
                    }
                }
            }
        }
    } else {
        if (input[1] < 13.333333) {
            if (input[6] < 31.297916) {
                if (input[0] < 37.0) {
                    if (input[5] < 309.0371) {
                        var43 = -0.07490607;
                    } else {
                        var43 = 0.011703856;
                    }
                } else {
                    if (input[0] < 82.0) {
                        var43 = -0.11269671;
                    } else {
                        var43 = -0.025362331;
                    }
                }
            } else {
                if (input[1] < 12.941176) {
                    if (input[2] < 11.0) {
                        var43 = -0.0005498144;
                    } else {
                        var43 = 0.070811406;
                    }
                } else {
                    if (input[6] < 65.72791) {
                        var43 = -0.026946524;
                    } else {
                        var43 = -0.17215227;
                    }
                }
            }
        } else {
            if (input[6] < 0.84034723) {
                if (input[0] < 50.0) {
                    if (input[0] < 46.0) {
                        var43 = -0.022953596;
                    } else {
                        var43 = 0.08708994;
                    }
                } else {
                    if (input[3] < 0.028873917) {
                        var43 = -0.09429273;
                    } else {
                        var43 = -0.036301564;
                    }
                }
            } else {
                if (input[0] < 119.0) {
                    if (input[3] < 0.36) {
                        var43 = 0.0147360535;
                    } else {
                        var43 = -0.007390652;
                    }
                } else {
                    if (input[3] < 0.39130434) {
                        var43 = -0.010798343;
                    } else {
                        var43 = 0.11719177;
                    }
                }
            }
        }
    }
    var var44;
    if (input[5] < 0.11446759) {
        if (input[6] < 50.335415) {
            if (input[2] < 69.0) {
                if (input[6] < 5.050463) {
                    if (input[5] < 0.034375) {
                        var44 = -0.014206002;
                    } else {
                        var44 = 0.031724032;
                    }
                } else {
                    if (input[3] < 1.5272727) {
                        var44 = 0.013509122;
                    } else {
                        var44 = 0.062154025;
                    }
                }
            } else {
                var44 = -0.076549314;
            }
        } else {
            if (input[2] < 8.0) {
                if (input[6] < 256.34695) {
                    if (input[6] < 176.06421) {
                        var44 = 0.05686773;
                    } else {
                        var44 = 0.014725893;
                    }
                } else {
                    if (input[1] < 70.23256) {
                        var44 = 0.08995565;
                    } else {
                        var44 = 0.010429289;
                    }
                }
            } else {
                if (input[6] < 317.06332) {
                    if (input[6] < 299.01215) {
                        var44 = 0.011479732;
                    } else {
                        var44 = -0.05585388;
                    }
                } else {
                    if (input[2] < 60.0) {
                        var44 = 0.07604973;
                    } else {
                        var44 = 0.0038991452;
                    }
                }
            }
        }
    } else {
        if (input[6] < 285.07483) {
            if (input[6] < 0.024780093) {
                if (input[1] < 43.333332) {
                    if (input[5] < 8.489352) {
                        var44 = -0.07629189;
                    } else {
                        var44 = 0.087687165;
                    }
                } else {
                    var44 = -0.093948536;
                }
            } else {
                if (input[2] < 47.0) {
                    if (input[1] < 13.846154) {
                        var44 = -0.005944195;
                    } else {
                        var44 = 0.011422907;
                    }
                } else {
                    if (input[1] < 111.31579) {
                        var44 = -0.008575871;
                    } else {
                        var44 = 0.009788511;
                    }
                }
            }
        } else {
            if (input[2] < 61.0) {
                if (input[0] < 3.0) {
                    if (input[5] < 6.819259) {
                        var44 = 0.0682001;
                    } else {
                        var44 = -0.014327128;
                    }
                } else {
                    if (input[6] < 326.13168) {
                        var44 = 0.08760787;
                    } else {
                        var44 = 0.010737033;
                    }
                }
            } else {
                if (input[1] < 68.333336) {
                    if (input[5] < 14.000196) {
                        var44 = -0.15936626;
                    } else {
                        var44 = 0.010726839;
                    }
                } else {
                    if (input[3] < 0.052083332) {
                        var44 = 0.07980987;
                    } else {
                        var44 = 0.003173459;
                    }
                }
            }
        }
    }
    var var45;
    if (input[0] < 13.0) {
        if (input[6] < 32.525105) {
            if (input[6] < 0.0048958333) {
                var45 = -0.09306975;
            } else {
                if (input[5] < 79.07286) {
                    if (input[2] < 3.0) {
                        var45 = 0.016498884;
                    } else {
                        var45 = -0.005756836;
                    }
                } else {
                    if (input[5] < 173.14151) {
                        var45 = 0.05840529;
                    } else {
                        var45 = 0.0055679665;
                    }
                }
            }
        } else {
            if (input[5] < 7.4992476) {
                if (input[3] < 2.4) {
                    if (input[2] < 4.0) {
                        var45 = 0.043808583;
                    } else {
                        var45 = 0.01374687;
                    }
                } else {
                    if (input[4] < 1.0) {
                        var45 = 0.07863005;
                    } else {
                        var45 = -0.07966758;
                    }
                }
            } else {
                if (input[5] < 9.009016) {
                    if (input[3] < 1.8461539) {
                        var45 = -0.023154596;
                    } else {
                        var45 = -0.22261715;
                    }
                } else {
                    if (input[3] < 0.51428574) {
                        var45 = 0.0021749872;
                    } else {
                        var45 = 0.035387855;
                    }
                }
            }
        }
    } else {
        if (input[1] < 67.04225) {
            if (input[0] < 92.0) {
                if (input[5] < 5.078322) {
                    if (input[3] < 1.21875) {
                        var45 = 0.12619509;
                    } else {
                        var45 = 0.0062332107;
                    }
                } else {
                    if (input[5] < 153.05817) {
                        var45 = -0.024613192;
                    } else {
                        var45 = -0.00093274855;
                    }
                }
            } else {
                if (input[3] < 0.15490533) {
                    if (input[1] < 62.0) {
                        var45 = -0.036574334;
                    } else {
                        var45 = -0.1174467;
                    }
                } else {
                    if (input[6] < 15.032616) {
                        var45 = -0.03867157;
                    } else {
                        var45 = 0.044007923;
                    }
                }
            }
        } else {
            if (input[2] < 74.0) {
                if (input[0] < 83.0) {
                    if (input[3] < 0.6) {
                        var45 = 0.021438744;
                    } else {
                        var45 = -0.013098381;
                    }
                } else {
                    if (input[3] < 0.050797544) {
                        var45 = 0.01089216;
                    } else {
                        var45 = -0.015013418;
                    }
                }
            } else {
                var45 = -0.08975076;
            }
        }
    }
    var var46;
    if (input[6] < 258.35382) {
        if (input[0] < 13.0) {
            if (input[2] < 23.0) {
                if (input[6] < 30.384155) {
                    if (input[1] < 106.666664) {
                        var46 = 0.00818596;
                    } else {
                        var46 = -0.071724646;
                    }
                } else {
                    if (input[1] < 60.35294) {
                        var46 = 0.017801672;
                    } else {
                        var46 = 0.055199184;
                    }
                }
            } else {
                if (input[1] < 64.0) {
                    if (input[1] < 60.0) {
                        var46 = 0.000088180655;
                    } else {
                        var46 = 0.070725486;
                    }
                } else {
                    if (input[6] < 140.19131) {
                        var46 = -0.010577547;
                    } else {
                        var46 = -0.12905988;
                    }
                }
            }
        } else {
            if (input[1] < 13.636364) {
                if (input[6] < 31.297916) {
                    if (input[0] < 22.0) {
                        var46 = -0.0188111;
                    } else {
                        var46 = -0.064622164;
                    }
                } else {
                    if (input[6] < 92.08866) {
                        var46 = 0.019964209;
                    } else {
                        var46 = -0.061929952;
                    }
                }
            } else {
                if (input[6] < 0.024780093) {
                    if (input[1] < 43.333332) {
                        var46 = -0.0032886036;
                    } else {
                        var46 = -0.089891665;
                    }
                } else {
                    if (input[5] < 27.7883) {
                        var46 = -0.025189748;
                    } else {
                        var46 = 0.0020413508;
                    }
                }
            }
        }
    } else {
        if (input[0] < 27.0) {
            if (input[3] < 1.2857143) {
                if (input[1] < 90.21164) {
                    if (input[1] < 41.6) {
                        var46 = 0.040463537;
                    } else {
                        var46 = -0.025644977;
                    }
                } else {
                    var46 = 0.09104247;
                }
            } else {
                if (input[1] < 15.151515) {
                    var46 = 0.00792;
                } else {
                    var46 = 0.088276;
                }
            }
        } else {
            if (input[5] < 51.02897) {
                if (input[3] < 0.13043478) {
                    var46 = 0.073743805;
                } else {
                    var46 = -0.013326536;
                }
            } else {
                if (input[6] < 268.13214) {
                    var46 = -0.0029690235;
                } else {
                    var46 = -0.19439137;
                }
            }
        }
    }
    var var47;
    if (input[6] < 258.35382) {
        if (input[5] < 0.11446759) {
            if (input[6] < 50.335415) {
                if (input[2] < 69.0) {
                    if (input[1] < 111.31579) {
                        var47 = 0.010462998;
                    } else {
                        var47 = -0.07766692;
                    }
                } else {
                    var47 = -0.07105597;
                }
            } else {
                if (input[6] < 65.72791) {
                    if (input[4] < 1.0) {
                        var47 = 0.074355595;
                    } else {
                        var47 = 0.039536078;
                    }
                } else {
                    if (input[6] < 80.48111) {
                        var47 = -0.084507726;
                    } else {
                        var47 = 0.027205301;
                    }
                }
            }
        } else {
            if (input[2] < 74.0) {
                if (input[6] < 0.024780093) {
                    if (input[1] < 43.333332) {
                        var47 = 0.017229486;
                    } else {
                        var47 = -0.08887798;
                    }
                } else {
                    if (input[1] < 70.0) {
                        var47 = -0.0019402951;
                    } else {
                        var47 = 0.0071259188;
                    }
                }
            } else {
                if (input[1] < 61.0) {
                    var47 = -0.008208346;
                } else {
                    var47 = -0.08882276;
                }
            }
        }
    } else {
        if (input[0] < 27.0) {
            if (input[3] < 1.2857143) {
                if (input[1] < 90.21164) {
                    if (input[1] < 41.6) {
                        var47 = 0.037932858;
                    } else {
                        var47 = -0.022782134;
                    }
                } else {
                    var47 = 0.08974737;
                }
            } else {
                if (input[1] < 15.151515) {
                    var47 = 0.007529142;
                } else {
                    var47 = 0.08705313;
                }
            }
        } else {
            if (input[5] < 51.02897) {
                if (input[3] < 0.13043478) {
                    var47 = 0.07199034;
                } else {
                    var47 = -0.012418939;
                }
            } else {
                if (input[3] < 0.02422611) {
                    var47 = 0.0015884765;
                } else {
                    if (input[6] < 272.3197) {
                        var47 = -0.028061261;
                    } else {
                        var47 = -0.2436192;
                    }
                }
            }
        }
    }
    var var48;
    if (input[0] < 25.0) {
        if (input[6] < 258.35382) {
            if (input[5] < 328.33865) {
                if (input[5] < 323.73026) {
                    if (input[2] < 23.0) {
                        var48 = 0.010745087;
                    } else {
                        var48 = -0.0009807976;
                    }
                } else {
                    if (input[2] < 15.0) {
                        var48 = 0.13579988;
                    } else {
                        var48 = 0.0077685877;
                    }
                }
            } else {
                if (input[0] < 10.0) {
                    var48 = -0.018811697;
                } else {
                    if (input[1] < 53.913044) {
                        var48 = -0.11547645;
                    } else {
                        var48 = -0.029136548;
                    }
                }
            }
        } else {
            if (input[3] < 1.2857143) {
                if (input[1] < 90.21164) {
                    if (input[1] < 41.6) {
                        var48 = 0.035409447;
                    } else {
                        var48 = -0.02406506;
                    }
                } else {
                    var48 = 0.088139564;
                }
            } else {
                if (input[1] < 15.151515) {
                    var48 = 0.007157425;
                } else {
                    if (input[6] < 269.99976) {
                        var48 = 0.03666517;
                    } else {
                        var48 = 0.09191834;
                    }
                }
            }
        }
    } else {
        if (input[1] < 67.04225) {
            if (input[0] < 219.0) {
                if (input[5] < 129.25781) {
                    if (input[4] < 1.0) {
                        var48 = 0.005531795;
                    } else {
                        var48 = -0.07082897;
                    }
                } else {
                    if (input[1] < 13.404255) {
                        var48 = -0.03984758;
                    } else {
                        var48 = -0.0042298487;
                    }
                }
            } else {
                if (input[6] < 8.562743) {
                    var48 = -0.09795686;
                } else {
                    if (input[5] < 279.6869) {
                        var48 = -0.111131504;
                    } else {
                        var48 = 0.019905325;
                    }
                }
            }
        } else {
            if (input[2] < 74.0) {
                if (input[5] < 20.38529) {
                    if (input[1] < 94.83146) {
                        var48 = 0.13651414;
                    } else {
                        var48 = 0.037510004;
                    }
                } else {
                    if (input[6] < 15.032616) {
                        var48 = -0.0049166;
                    } else {
                        var48 = 0.010419878;
                    }
                }
            } else {
                var48 = -0.08491627;
            }
        }
    }
    var var49;
    if (input[5] < 1.7756366) {
        if (input[6] < 50.148403) {
            if (input[1] < 83.92857) {
                if (input[1] < 41.42857) {
                    if (input[3] < 3.75) {
                        var49 = 0.0062947697;
                    } else {
                        var49 = -0.038182933;
                    }
                } else {
                    if (input[0] < 3.0) {
                        var49 = 0.010649639;
                    } else {
                        var49 = 0.07618874;
                    }
                }
            } else {
                if (input[3] < 0.4477612) {
                    var49 = -0.1435092;
                } else {
                    if (input[6] < 8.562743) {
                        var49 = -0.03086335;
                    } else {
                        var49 = 0.053762536;
                    }
                }
            }
        } else {
            if (input[2] < 10.0) {
                if (input[4] < 1.0) {
                    if (input[3] < 2.4545455) {
                        var49 = 0.044175442;
                    } else {
                        var49 = 0.08079013;
                    }
                } else {
                    if (input[6] < 69.62046) {
                        var49 = 0.026121706;
                    } else {
                        var49 = -0.051573068;
                    }
                }
            } else {
                if (input[2] < 57.0) {
                    if (input[2] < 50.0) {
                        var49 = 0.000989576;
                    } else {
                        var49 = -0.13656148;
                    }
                } else {
                    if (input[5] < 0.034918983) {
                        var49 = 0.016467845;
                    } else {
                        var49 = 0.082345665;
                    }
                }
            }
        }
    } else {
        if (input[2] < 71.0) {
            if (input[1] < 70.0) {
                if (input[0] < 25.0) {
                    if (input[5] < 328.33865) {
                        var49 = 0.003646855;
                    } else {
                        var49 = -0.091044;
                    }
                } else {
                    if (input[5] < 325.6398) {
                        var49 = -0.018383188;
                    } else {
                        var49 = 0.010463635;
                    }
                }
            } else {
                if (input[4] < 1.0) {
                    if (input[6] < 6.05044) {
                        var49 = -0.012290592;
                    } else {
                        var49 = 0.037192468;
                    }
                } else {
                    if (input[6] < 285.07483) {
                        var49 = 0.0027958462;
                    } else {
                        var49 = 0.067692816;
                    }
                }
            }
        } else {
            if (input[6] < 3.0935764) {
                if (input[1] < 116.38596) {
                    if (input[3] < 0.0056179776) {
                        var49 = -0.002907344;
                    } else {
                        var49 = -0.0806447;
                    }
                } else {
                    if (input[1] < 156.86667) {
                        var49 = 0.021764314;
                    } else {
                        var49 = -0.08365031;
                    }
                }
            } else {
                if (input[0] < 211.0) {
                    if (input[3] < 0.115384616) {
                        var49 = 0.109936915;
                    } else {
                        var49 = -0.04143393;
                    }
                } else {
                    if (input[5] < 325.6398) {
                        var49 = -0.011434632;
                    } else {
                        var49 = -0.080292724;
                    }
                }
            }
        }
    }
    var var50;
    var50 = sigmoid(var0 + var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 + var12 + var13 + var14 + var15 + var16 + var17 + var18 + var19 + var20 + var21 + var22 + var23 + var24 + var25 + var26 + var27 + var28 + var29 + var30 + var31 + var32 + var33 + var34 + var35 + var36 + var37 + var38 + var39 + var40 + var41 + var42 + var43 + var44 + var45 + var46 + var47 + var48 + var49);
    return [1.0 - var50, var50];
}
function sigmoid(x) {
    if (x < 0.0) {
        var z = Math.exp(x);
        return z / (1.0 + z);
    }
    return 1.0 / (1.0 + Math.exp(-x));
}

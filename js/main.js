(function(w, d){
    var body = d.body,
        $ = d.querySelector.bind(d),
        header = $('.header'),
        headerBar = $('.header-bar-wrap'),
        logo = $('.logo'),
        logoDark = $('.logo-dark'),
        gotop = $('.gotop'),
        menuIcon = $('.menu-moblie-icon'),
        animate = w.requestAnimationFrame,
        tap = ('ontouchstart' in w && /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)) ? 'touchstart' : 'click',
        noop = function () { },
        offset = function (el) {
            var x = el.offsetLeft,
                y = el.offsetTop;

            if (el.offsetParent) {
                var pOfs = arguments.callee(el.offsetParent);
                x += pOfs.x;
                y += pOfs.y;
            }

            return {
                x: x,
                y: y
            };
        },
        rootScrollTop = function() {
            return d.documentElement.scrollTop || d.body.scrollTop;
        };

        Blog = {
            toggleGoTop: function(top) {
                if (top > w.innerHeight / 2) {
                    gotop.classList.add('show');
                } else {
                    gotop.classList.remove('show');
                }
            },
            goTop: function () {
                timer = setInterval( function(){
                    //获取滚动条的滚动高度
                    var top = rootScrollTop();
                    //用于设置速度差，产生缓动的效果
                    var speed = Math.floor(-top / 3);
                    d.documentElement.scrollTop = d.body.scrollTop = top + speed;
                    if(top == 0){
                        clearInterval(timer);
                    }
                },30 );
            },
            // 菜单显藏
            toggleMenu: function() {
                var menuPanle = $('.menu-mobile-panel')
                if(menuPanle.classList.contains('show')) {
                    menuPanle.classList.remove('show');
                }else {
                    menuPanle.classList.add('show');
                };
            },
            // 固定header栏
            fixedHeader: function(top) {
                if (top + 60 > header.clientHeight) {
                    headerBar.classList.add('fixed');
                    logo.style.display = 'none';
                    logoDark.style.display = 'block';
                } else {
                    headerBar.classList.remove('fixed');
                    logo.style.display = 'block';
                    logoDark.style.display = 'none';
                }
            },
            // 
            getClientWidth () {
                let w = document.documentElement.clientWidth;
                if(w === 480) {
                    console.log(w)
                }
                
            },
            // TOC
            toc: (function () {
                var toc = $('#post-toc');
    
                if (!toc || !toc.children.length) {
                    return {
                        fixed: noop,
                        actived: noop
                    }
                }
    
                var headerH = header.clientHeight,
                    headerBarH = headerBar.clientHeight,
                    titles = $('.article').querySelectorAll('h1, h2, h3, h4, h5, h6');
    
                toc.querySelector('a[href="#' + titles[0].id + '"]').parentNode.classList.add('active');
    
                // Make every child shrink initially
                var tocChilds = toc.querySelectorAll('.post-toc-child');
                for (i = 0, len = tocChilds.length; i < len; i++) {
                    tocChilds[i].classList.add('post-toc-shrink');
                }
                var firstChild =
                    toc.querySelector('a[href="#' + titles[0].id + '"]')
                        .nextElementSibling;
                if (firstChild) {
                    firstChild.classList.add('post-toc-expand');
                    firstChild.classList.remove('post-toc-shrink');
                }
                toc.classList.remove('post-toc-shrink');
    
                /**
                 * Handle toc active and expansion
                 * @param prevEle previous active li element
                 * @param currEle current active li element
                 */
                var handleTocActive = function (prevEle, currEle) {
                    prevEle.classList.remove('active');
                    currEle.classList.add('active');
    
                    var siblingChilds = currEle.parentElement.querySelectorAll('.post-toc-child');
                    for (j = 0, len1 = siblingChilds.length; j < len1; j++) {
                        siblingChilds[j].classList.remove('post-toc-expand');
                        siblingChilds[j].classList.add('post-toc-shrink');
                    }
                    var myChild = currEle.querySelector('.post-toc-child');
                    if (myChild) {
                        myChild.classList.remove('post-toc-shrink');
                        myChild.classList.add('post-toc-expand');
                    }
                };
    
                return {
                    fixed: function (top) {
                        top >= headerH - headerBarH ? toc.classList.add('fixed') : toc.classList.remove('fixed');
                    },
                    actived: function (top) {
                        for (i = 0, len = titles.length; i < len; i++) {
                            if (top > offset(titles[i]).y - headerH - 5) {
                                var prevListEle = toc.querySelector('li.active');
                                var currListEle = toc.querySelector('a[href="#' + titles[i].id + '"]').parentNode;
    
                                handleTocActive(prevListEle, currListEle);
                            }
                        }
    
                        if (top < offset(titles[0]).y) {
                            handleTocActive(
                                toc.querySelector('li.active'),
                                toc.querySelector('a[href="#' + titles[0].id + '"]').parentNode
                            );
                        }
                    }
                }
            })()
        }
        gotop.addEventListener(tap, function () {
            Blog.goTop();
        }, false);
        menuIcon.addEventListener(tap, function() {
            Blog.toggleMenu();
        });
        w.addEventListener('DOMContentLoaded', function () {
            var top = rootScrollTop();
            Blog.toc.fixed(top);
            Blog.toc.actived(top);
        });

        d.addEventListener('scroll', function () {
            var top = rootScrollTop();
            Blog.fixedHeader(top);
            Blog.toggleGoTop(top);
            Blog.toc.fixed(top);
            Blog.toc.actived(top);
        }, false);
        
        w.onresize = function() {
            Blog.getClientWidth()
        }
})(window, document);
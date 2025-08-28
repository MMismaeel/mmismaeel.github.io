(function(){
	const header = document.querySelector('.site-header');
	const footer = document.querySelector('.site-footer');
	const isInPages = location.pathname.indexOf('/pages/') !== -1;
	const basePath = isInPages ? '..' : '.';
	const navHtml = `
		<div class="container">
			<nav class="primary">
				<a class="brand" href="${basePath}/index.html">🧣 Usman Shawls Centre</a>
				<ul>
					<li><a href="${basePath}/index.html">Home</a></li>
					<li><a href="${basePath}/pages/about.html">About</a></li>
					<li><a href="${basePath}/pages/products.html">Products</a></li>
					<li><a href="${basePath}/pages/collections.html">Collections</a></li>
					<li><a href="${basePath}/pages/gallery.html">Gallery</a></li>
					<li><a href="${basePath}/pages/custom-order.html">Custom Order</a></li>
					<li><a href="${basePath}/pages/faq.html">FAQ</a></li>
					<li><a href="${basePath}/pages/testimonials.html">Testimonials</a></li>
					<li><a href="${basePath}/pages/contact.html">Contact</a></li>
					<li><a href="${basePath}/pages/store-locator.html">Store Locator</a></li>
				</ul>
			</nav>
		</div>`;
	const footerHtml = `
		<div class="container">
			<div>
				<strong>Usman Shawls Centre</strong><br/>
				<small>Premium shawls, stoles & scarves</small>
			</div>
			<small>© ${new Date().getFullYear()} Usman Shawls Centre. All rights reserved.</small>
		</div>`;
	if(header){ header.innerHTML = navHtml; }
	if(footer){ footer.innerHTML = footerHtml; }

	// Mark active link based on filename
	const currentFile = (location.pathname.split('/').pop() || 'index.html');
	const links = document.querySelectorAll('nav.primary a');
	links.forEach(link => {
		const hrefFile = link.getAttribute('href').split('/').pop();
		if(hrefFile === currentFile){
			link.classList.add('active');
		}
	});
})();
(function(){
	const header = document.querySelector(.site-header);
	const footer = document.querySelector(.site-footer);
	const isInPages = location.pathname.indexOf(/pages/) !== -1;
	const basePath = isInPages ? .. : .;
	const navHtml = `
		<div class="container">
			<nav class="primary">
				<a class="brand" href="${basePath}/index.html">🧣 Usman Shawls Centre</a>
				<ul>
					<li><a href="${basePath}/index.html">Home</a></li>
					<li><a href="${basePath}/pages/about.html">About</a></li>
					<li><a href="${basePath}/pages/products.html">Products</a></li>
					<li><a href="${basePath}/pages/collections.html">Collections</a></li>
					<li><a href="${basePath}/pages/gallery.html">Gallery</a></li>
					<li><a href="${basePath}/pages/custom-order.html">Custom Order</a></li>
					<li><a href="${basePath}/pages/faq.html">FAQ</a></li>
					<li><a href="${basePath}/pages/testimonials.html">Testimonials</a></li>
					<li><a href="${basePath}/pages/contact.html">Contact</a></li>
					<li><a href="${basePath}/pages/store-locator.html">Store Locator</a></li>
				</ul>
			</nav>
		</div>`;
	const footerHtml = `
		<div class="container">
			<div>
				<strong>Usman Shawls Centre</strong><br/>
				<small>Premium shawls, stoles & scarves</small>
			</div>
			<small>© ${new Date().getFullYear()} Usman Shawls Centre. All rights reserved.</small>
		</div>`;
	if(header){ header.innerHTML = navHtml; }
	if(footer){ footer.innerHTML = footerHtml; }

	// Mark active link based on filename
	const currentFile = (location.pathname.split(/).pop() || index.html);
	const links = document.querySelectorAll(nav.primary

import { defaultUrl } from "./core";

export const updateMetadata =
    (title?: string, description?: string, ogTitle?: string, ogDescription?: string, ogImageUrl?: string,) => {

        document.title = title || "Reactjs Dynamic Metadata";

        const setMetaTag = (property: string, content: string) => {
            let element = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement;
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMetaTag('og:title', ogTitle || "Reactjs Dynamic Metadata");
        setMetaTag('og:description', ogDescription || "Reactjs Dynamic Metadata OG Description");
        setMetaTag('og:image', ogImageUrl || defaultUrl);

        setMetaTag('description', description || "Reactjs Dynamic Metadata Description");

    }

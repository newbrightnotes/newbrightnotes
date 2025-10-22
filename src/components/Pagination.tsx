import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath?: string;
}

export default function Pagination({ currentPage, totalPages, basePath = "" }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPageUrl = (page: number) => {
        if (page === 1) {
            return basePath || "/";
        }
        return `${basePath}/page/${page}`;
    };

    const renderPageNumbers = () => {
        const pages: (number | string)[] = [];
        const showEllipsis = totalPages > 7;

        if (!showEllipsis) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages.map((page, index) => {
            if (page === "...") {
                return (
                    <span key={`ellipsis-${index}`} className="page-numbers dots">
                        …
                    </span>
                );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return isActive ? (
                <span key={pageNumber} aria-current="page" className="page-numbers current">
                    {pageNumber}
                </span>
            ) : (
                <Link key={pageNumber} className="page-numbers" href={getPageUrl(pageNumber)}>
                    {pageNumber}
                </Link>
            );
        });
    };

    return (
        <nav className="navigation pagination" aria-label="Paginação de posts">
            <h2 className="screen-reader-text">Paginação de posts</h2>
            <div className="nav-links">
                {currentPage > 1 && (
                    <Link className="prev page-numbers" href={getPageUrl(currentPage - 1)}>
                        &larr; Anterior
                    </Link>
                )}
                {renderPageNumbers()}
                {currentPage < totalPages && (
                    <Link className="next page-numbers" href={getPageUrl(currentPage + 1)}>
                        Próximo &rarr;
                    </Link>
                )}
            </div>
        </nav>
    );
}

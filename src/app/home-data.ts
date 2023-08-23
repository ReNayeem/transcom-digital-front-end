import prisma from "../../prisma/prisma";

export const revalidate = 30;

export const getDeals = async () => {
  try {
    return await prisma.product.findMany({
      include: {
        Brand: {
          include: {
            Category: true,
          },
        },
      },
      orderBy: {
        salePrice: "desc",
      },
      take: 8,
    });
  } catch (error) {
    throw new Error("Failed to fetch products");
  } finally {
    await prisma.$disconnect();
  }
};

export const getSelling = async () => {
  try {
    return await prisma.product.findMany({
      include: {
        Brand: {
          include: {
            Category: true,
          },
        },
      },
      take: 8,
    });
  } catch (error) {
    throw new Error("Failed to fetch products");
  } finally {
    await prisma.$disconnect();
  }
};

export const getBrands = async () => {
  try {
    return await prisma.brand.findMany({ take: 8 });
  } catch (error) {
    throw new Error("Failed to fetch brands");
  } finally {
    await prisma.$disconnect();
  }
};

export const getCategories = async () => {
  try {
    return await prisma.category.findMany({ take: 8 });
  } catch (error) {
    throw new Error("Failed to fetch categories");
  } finally {
    await prisma.$disconnect();
  }
};

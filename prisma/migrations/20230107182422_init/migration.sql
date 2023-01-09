-- CreateTable
CREATE TABLE "Lang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Lang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackType" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "PackType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackTypeLang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "packTypeId" TEXT NOT NULL,
    "lang_id" TEXT NOT NULL,

    CONSTRAINT "PackTypeLang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "date_release" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "type_id" TEXT NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackLang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "packId" TEXT NOT NULL,
    "lang_id" TEXT NOT NULL,

    CONSTRAINT "PackLang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faction" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Faction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FactionLang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "factionId" TEXT NOT NULL,
    "lang_id" TEXT NOT NULL,

    CONSTRAINT "FactionLang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeLang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "lang_id" TEXT NOT NULL,

    CONSTRAINT "TypeLang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SetType" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SetLang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "set_id" TEXT NOT NULL,
    "lang_id" TEXT NOT NULL,

    CONSTRAINT "SetLang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraitsOnCards" (
    "id" TEXT NOT NULL,
    "trait_id" TEXT,
    "card_id" TEXT,

    CONSTRAINT "TraitsOnCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "imageId" TEXT,
    "quantity" INTEGER NOT NULL,
    "back_link" TEXT,
    "deck_limit" INTEGER,
    "defense" INTEGER,
    "hand_size" INTEGER,
    "health" INTEGER,
    "illustrator" TEXT,
    "is_unique" BOOLEAN,
    "position" INTEGER,
    "thwart" INTEGER,
    "hidden" BOOLEAN,
    "recover" INTEGER,
    "attack_cost" INTEGER,
    "cost" TEXT,
    "resource_wild" INTEGER,
    "set_position" INTEGER,
    "subname" TEXT,
    "thwart_cost" INTEGER,
    "resource_energy" INTEGER,
    "resource_physical" INTEGER,
    "resource_mental" INTEGER,
    "boost" INTEGER,
    "base_threat" INTEGER,
    "attack_text" TEXT,
    "boost_text" TEXT,
    "scheme_text" TEXT,
    "scheme_acceleration" INTEGER,
    "health_per_hero" BOOLEAN,
    "stage" INTEGER,
    "double_sided" BOOLEAN,
    "escalation_threat" INTEGER,
    "scheme_crisis" INTEGER,
    "threat" INTEGER,
    "scheme_hazard" INTEGER,
    "scheme_boost" INTEGER,
    "scheme_amplify" INTEGER,
    "escalation_threat_fixed" BOOLEAN,
    "back_name" TEXT,
    "permanent" BOOLEAN,
    "spoiler" INTEGER,
    "threat_fixed" BOOLEAN,
    "type_id" TEXT,
    "pack_id" TEXT,
    "set_id" TEXT,
    "faction_id" TEXT,
    "duplicatedOfId" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardLang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT,
    "flavor" TEXT,
    "traits" TEXT,
    "back_flavor" TEXT,
    "back_text" TEXT,
    "back_traits" TEXT,
    "thwart_text" TEXT,
    "card_id" TEXT NOT NULL,
    "lang_id" TEXT NOT NULL,

    CONSTRAINT "CardLang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_linkedTo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lang_id_key" ON "Lang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PackType_id_key" ON "PackType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PackType_code_key" ON "PackType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PackTypeLang_id_key" ON "PackTypeLang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pack_id_key" ON "Pack"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PackLang_id_key" ON "PackLang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Faction_id_key" ON "Faction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FactionLang_id_key" ON "FactionLang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Type_id_key" ON "Type"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeLang_id_key" ON "TypeLang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trait_id_key" ON "Trait"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SetType_id_key" ON "SetType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Set_id_key" ON "Set"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SetLang_id_key" ON "SetLang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CardLang_id_key" ON "CardLang"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_linkedTo_AB_unique" ON "_linkedTo"("A", "B");

-- CreateIndex
CREATE INDEX "_linkedTo_B_index" ON "_linkedTo"("B");

-- AddForeignKey
ALTER TABLE "PackTypeLang" ADD CONSTRAINT "PackTypeLang_packTypeId_fkey" FOREIGN KEY ("packTypeId") REFERENCES "PackType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackTypeLang" ADD CONSTRAINT "PackTypeLang_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "Lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "PackType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackLang" ADD CONSTRAINT "PackLang_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackLang" ADD CONSTRAINT "PackLang_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "Lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FactionLang" ADD CONSTRAINT "FactionLang_factionId_fkey" FOREIGN KEY ("factionId") REFERENCES "Faction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FactionLang" ADD CONSTRAINT "FactionLang_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "Lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeLang" ADD CONSTRAINT "TypeLang_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeLang" ADD CONSTRAINT "TypeLang_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "Lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "SetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetLang" ADD CONSTRAINT "SetLang_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetLang" ADD CONSTRAINT "SetLang_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "Lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraitsOnCards" ADD CONSTRAINT "TraitsOnCards_trait_id_fkey" FOREIGN KEY ("trait_id") REFERENCES "Trait"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraitsOnCards" ADD CONSTRAINT "TraitsOnCards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_pack_id_fkey" FOREIGN KEY ("pack_id") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "Set"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_faction_id_fkey" FOREIGN KEY ("faction_id") REFERENCES "Faction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_duplicatedOfId_fkey" FOREIGN KEY ("duplicatedOfId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardLang" ADD CONSTRAINT "CardLang_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardLang" ADD CONSTRAINT "CardLang_lang_id_fkey" FOREIGN KEY ("lang_id") REFERENCES "Lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_linkedTo" ADD CONSTRAINT "_linkedTo_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_linkedTo" ADD CONSTRAINT "_linkedTo_B_fkey" FOREIGN KEY ("B") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

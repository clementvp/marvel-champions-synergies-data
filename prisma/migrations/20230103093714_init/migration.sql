-- CreateTable
CREATE TABLE "PackType" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PackType_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Pack" (
    "code" TEXT NOT NULL,
    "date_release" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "type_code" TEXT NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Faction" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Faction_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Type" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Trait" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "SetType" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SetType_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Set" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type_code" TEXT NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "TraitsOnCards" (
    "id" TEXT NOT NULL,
    "trait_code" TEXT,
    "card_code" TEXT,

    CONSTRAINT "TraitsOnCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageId" TEXT,
    "quantity" INTEGER NOT NULL,
    "back_link" TEXT,
    "deck_limit" INTEGER,
    "defense" INTEGER,
    "flavor" TEXT,
    "hand_size" INTEGER,
    "health" INTEGER,
    "illustrator" TEXT,
    "is_unique" BOOLEAN,
    "position" INTEGER,
    "text" TEXT,
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
    "back_flavor" TEXT,
    "back_text" TEXT,
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
    "thwart_text" TEXT,
    "back_traits" TEXT,
    "spoiler" INTEGER,
    "threat_fixed" BOOLEAN,
    "type_code" TEXT,
    "pack_code" TEXT,
    "set_code" TEXT,
    "faction_code" TEXT,
    "duplicatedOfId" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "_linkedTo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PackType_code_key" ON "PackType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Pack_code_key" ON "Pack"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Faction_code_key" ON "Faction"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Type_code_key" ON "Type"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Trait_code_key" ON "Trait"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SetType_code_key" ON "SetType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Set_code_key" ON "Set"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Card_code_key" ON "Card"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_linkedTo_AB_unique" ON "_linkedTo"("A", "B");

-- CreateIndex
CREATE INDEX "_linkedTo_B_index" ON "_linkedTo"("B");

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_type_code_fkey" FOREIGN KEY ("type_code") REFERENCES "PackType"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_type_code_fkey" FOREIGN KEY ("type_code") REFERENCES "SetType"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraitsOnCards" ADD CONSTRAINT "TraitsOnCards_trait_code_fkey" FOREIGN KEY ("trait_code") REFERENCES "Trait"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraitsOnCards" ADD CONSTRAINT "TraitsOnCards_card_code_fkey" FOREIGN KEY ("card_code") REFERENCES "Card"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_type_code_fkey" FOREIGN KEY ("type_code") REFERENCES "Type"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_pack_code_fkey" FOREIGN KEY ("pack_code") REFERENCES "Pack"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_set_code_fkey" FOREIGN KEY ("set_code") REFERENCES "Set"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_faction_code_fkey" FOREIGN KEY ("faction_code") REFERENCES "Faction"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_duplicatedOfId_fkey" FOREIGN KEY ("duplicatedOfId") REFERENCES "Card"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_linkedTo" ADD CONSTRAINT "_linkedTo_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_linkedTo" ADD CONSTRAINT "_linkedTo_B_fkey" FOREIGN KEY ("B") REFERENCES "Card"("code") ON DELETE CASCADE ON UPDATE CASCADE;

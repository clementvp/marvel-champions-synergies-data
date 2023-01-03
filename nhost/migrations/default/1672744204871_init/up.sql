SET check_function_bodies = false;
CREATE TABLE public."Card" (
    code text NOT NULL,
    name text NOT NULL,
    "imageId" text,
    quantity integer NOT NULL,
    back_link text,
    deck_limit integer,
    defense integer,
    flavor text,
    hand_size integer,
    health integer,
    illustrator text,
    is_unique boolean,
    "position" integer,
    text text,
    thwart integer,
    hidden boolean,
    recover integer,
    attack_cost integer,
    cost text,
    resource_wild integer,
    set_position integer,
    subname text,
    thwart_cost integer,
    resource_energy integer,
    resource_physical integer,
    resource_mental integer,
    boost integer,
    base_threat integer,
    attack_text text,
    boost_text text,
    scheme_text text,
    scheme_acceleration integer,
    health_per_hero boolean,
    stage integer,
    back_flavor text,
    back_text text,
    double_sided boolean,
    escalation_threat integer,
    scheme_crisis integer,
    threat integer,
    scheme_hazard integer,
    scheme_boost integer,
    scheme_amplify integer,
    escalation_threat_fixed boolean,
    back_name text,
    permanent boolean,
    thwart_text text,
    back_traits text,
    spoiler integer,
    threat_fixed boolean,
    type_code text,
    pack_code text,
    set_code text,
    faction_code text,
    "duplicatedOfId" text
);
CREATE TABLE public."Faction" (
    code text NOT NULL,
    name text NOT NULL
);
CREATE TABLE public."Pack" (
    code text NOT NULL,
    date_release text NOT NULL,
    name text NOT NULL,
    "position" integer NOT NULL,
    size integer NOT NULL,
    type_code text NOT NULL
);
CREATE TABLE public."PackType" (
    code text NOT NULL,
    name text NOT NULL
);
CREATE TABLE public."Set" (
    code text NOT NULL,
    name text NOT NULL,
    type_code text NOT NULL
);
CREATE TABLE public."SetType" (
    code text NOT NULL,
    name text NOT NULL
);
CREATE TABLE public."Trait" (
    code text NOT NULL,
    name text NOT NULL
);
CREATE TABLE public."TraitsOnCards" (
    id text NOT NULL,
    trait_code text,
    card_code text
);
CREATE TABLE public."Type" (
    code text NOT NULL,
    name text NOT NULL
);
CREATE TABLE public."_linkedTo" (
    "A" text NOT NULL,
    "B" text NOT NULL
);
ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."Faction"
    ADD CONSTRAINT "Faction_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."PackType"
    ADD CONSTRAINT "PackType_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."Pack"
    ADD CONSTRAINT "Pack_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."SetType"
    ADD CONSTRAINT "SetType_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."Set"
    ADD CONSTRAINT "Set_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."Trait"
    ADD CONSTRAINT "Trait_pkey" PRIMARY KEY (code);
ALTER TABLE ONLY public."TraitsOnCards"
    ADD CONSTRAINT "TraitsOnCards_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_pkey" PRIMARY KEY (code);
CREATE UNIQUE INDEX "Card_code_key" ON public."Card" USING btree (code);
CREATE UNIQUE INDEX "Faction_code_key" ON public."Faction" USING btree (code);
CREATE UNIQUE INDEX "PackType_code_key" ON public."PackType" USING btree (code);
CREATE UNIQUE INDEX "Pack_code_key" ON public."Pack" USING btree (code);
CREATE UNIQUE INDEX "SetType_code_key" ON public."SetType" USING btree (code);
CREATE UNIQUE INDEX "Set_code_key" ON public."Set" USING btree (code);
CREATE UNIQUE INDEX "Trait_code_key" ON public."Trait" USING btree (code);
CREATE UNIQUE INDEX "Type_code_key" ON public."Type" USING btree (code);
CREATE UNIQUE INDEX "_linkedTo_AB_unique" ON public."_linkedTo" USING btree ("A", "B");
CREATE INDEX "_linkedTo_B_index" ON public."_linkedTo" USING btree ("B");
ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_duplicatedOfId_fkey" FOREIGN KEY ("duplicatedOfId") REFERENCES public."Card"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_faction_code_fkey" FOREIGN KEY (faction_code) REFERENCES public."Faction"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_pack_code_fkey" FOREIGN KEY (pack_code) REFERENCES public."Pack"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_set_code_fkey" FOREIGN KEY (set_code) REFERENCES public."Set"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Card"
    ADD CONSTRAINT "Card_type_code_fkey" FOREIGN KEY (type_code) REFERENCES public."Type"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."Pack"
    ADD CONSTRAINT "Pack_type_code_fkey" FOREIGN KEY (type_code) REFERENCES public."PackType"(code) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Set"
    ADD CONSTRAINT "Set_type_code_fkey" FOREIGN KEY (type_code) REFERENCES public."SetType"(code) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."TraitsOnCards"
    ADD CONSTRAINT "TraitsOnCards_card_code_fkey" FOREIGN KEY (card_code) REFERENCES public."Card"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."TraitsOnCards"
    ADD CONSTRAINT "TraitsOnCards_trait_code_fkey" FOREIGN KEY (trait_code) REFERENCES public."Trait"(code) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."_linkedTo"
    ADD CONSTRAINT "_linkedTo_A_fkey" FOREIGN KEY ("A") REFERENCES public."Card"(code) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."_linkedTo"
    ADD CONSTRAINT "_linkedTo_B_fkey" FOREIGN KEY ("B") REFERENCES public."Card"(code) ON UPDATE CASCADE ON DELETE CASCADE;

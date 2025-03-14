import Column from "components/Column/Column";
import Columns from "components/Columns/Columns";
import ContactForm from "components/ContactForm/ContactForm";
import Cover from "components/Cover/Cover";
import Gallery from "components/Gallery/Gallery";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import PropertyFeatures from "components/PropertyFeatures/PropertyFeatures";
import PropertySearch from "components/PropertySearch/PropertySearch";
import TickList from "components/TickList/TickList";
import UpcomingEvents from "components/UpcomingEvents/UpcomingEvents";
import Image from "next/image";
import Membership from "components/Membership/Membership";
import WorkGrid from "components/WorkGrid/WorkGrid";
import Events from "components/Events/Events";
import DistrictRepresentatives from "components/DistrictRepresentatives/DistrictRepresentatives";
import AdministrationRepresentatives from "components/AdministrationRepresentatives/AdministrationRepresentatives";
import YouthClub from "components/YouthClub/YouthClub";
import AboutUs from "components/AboutUs/AboutUs";
import OrganizationalStructure from "components/OrganizationalStructure/OrganizationalStructure";

export const BlockRenderer = ({ blocks }) => {
   console.log(blocks?.map((block) => block));
  return blocks?.map((block) => {
    switch (block.name) {
      case "lazyblock/district":
        return <DistrictRepresentatives key={block.id} />;
      case "lazyblock/about-us":
        return <AboutUs key={block.id} />;
      case "lazyblock/organizational-structure":
        return <OrganizationalStructure key={block.id} />;
      case "lazyblock/administration":
        return <AdministrationRepresentatives key={block.id} attributes={block.attributes} />;
      case "lazyblock/youth-club":
        return <YouthClub key={block.id} />;
      case "lazyblock/events":
        return <Events key={block.id} />;
      case "lazyblock/upcoming-events":
        return <UpcomingEvents key={block.id} />;
      case "lazyblock/membership":
        return <Membership key={block.id} />;
      case "lazyblock/upcoming-events":
        return <UpcomingEvents key={block.id} />;
      case "lazyblock/card-grid":
        return <WorkGrid key={block.id} />;
      case "lazyblock/tick-item":
        return <TickList key={block.id} attributes={block.attributes} />;a
      case "core/gallery":
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            imageCrop={block.attributes.imageCrop || false}
            items={block.innerBlocks}
            attributes={block.attributes}
          />
        );
      case "lazyblock/contact-form":
        return <ContactForm key={block.id} />;
      case "lazyblock/property-features":
        return (
          <PropertyFeatures key={block.id} attributes={block.attributes} />
        );
      case "core/heading":
      case "core/post-title":
        return (
          <Heading
            key={block.id}
            content={block.attributes.content}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
          />
        );
      case "core/cover":
        console.log(block, "ICh bin ein cover");
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      case "core/paragraph":
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      case "core/columns":
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={block.attributes.textColor}
            backgroundColor={block.attributes.backgroundColor}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      case "core/column":
        return (
          <Column key={block.id}>
            {" "}
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      case "core/block":
        return (
          <div>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      case "core/group":
        return (
          <div>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );
      case "core/image":
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
          />
        );
      case "core/search":
        return <PropertySearch key={block.id} />;
      default:
        return null;
    }
  });
};

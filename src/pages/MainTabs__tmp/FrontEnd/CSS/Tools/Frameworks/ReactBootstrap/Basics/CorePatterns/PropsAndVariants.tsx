import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PropsAndVariants = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/PropsAndVariants';

  return (
    <>
      <PageLayout>
        <PageTitle title="Props & Variants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropsAndVariants;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PropsAndVariants = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/PropsAndVariants';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Props & Variants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropsAndVariants;

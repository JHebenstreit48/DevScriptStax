import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Frameworks = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Integration/Frameworks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Frameworks (React/Next)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Frameworks;

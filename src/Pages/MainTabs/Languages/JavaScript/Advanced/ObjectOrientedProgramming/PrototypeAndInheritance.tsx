import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PrototypeAndInheritance = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/ObjectOrientedProgramming/PrototypeAndInheritance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Prototype and Inheritance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PrototypeAndInheritance;
